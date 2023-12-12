import * as promiseUtils from "@arcgis/core/core/promiseUtils";
import Extent from "@arcgis/core/geometry/Extent";
import Mesh from "@arcgis/core/geometry/Mesh";
import Graphic from "@arcgis/core/Graphic";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import ImageryTileLayer from "@arcgis/core/layers/ImageryTileLayer";
import { Chart, registerables } from "chart.js";

// Web Component Imports
// import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
// import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
defineMapElements();

let map: Map;
let view: SceneView;
let imgLayer: ImageryTileLayer;
let volGraphicsLayer: GraphicsLayer;
let imgLayerRasterSizeX: number;
let imgLayerRasterSizeY: number;
let chart: Chart;

document
  .querySelector("arcgis-scene")
  ?.addEventListener("viewReady", async (event: any) => {
    view = event.detail.view;
    map = view.map;
    console.log(`Got view and map from the DOM`, view, map);

    initApp();
  });

const setupView = () => {
  // TODO: local only works on init :/
  // const clippingAdd = 100;
  // view.viewingMode = "local";
  // view.clippingArea = {
  //     spatialReference: { latestWkid: 3857, wkid: 102100 } as unknown as __esri.SpatialReference,
  //     xmin: -4891786.441670591 - clippingAdd,
  //     ymin: -2307257.926811594 - clippingAdd,
  //     xmax: -4891427.934010591 + clippingAdd,
  //     ymax: -2306963.3097615945 + clippingAdd,
  //   } as unknown as __esri.Extent;

  const extentAdd = 1000;
  view.extent = {
    spatialReference: {
      latestWkid: 3857,
      wkid: 102100,
    } as unknown as __esri.SpatialReference,
    xmin: -4_891_786.441_670_591 - extentAdd,
    ymin: -2_307_257.926_811_594,
    xmax: -4_891_427.934_010_591 + extentAdd,
    ymax: -2_306_963.309_761_594_5 + extentAdd * 2,
  } as unknown as __esri.Extent;
  view.camera = {
    position: {
      spatialReference: {
        latestWkid: 3857,
        wkid: 102100,
      } as unknown as __esri.SpatialReference,
      x: -4891793.969308218,
      y: -2307727.852329162,
      z: 1884.7450796905905,
    },
    heading: 15.783027823378896,
    tilt: 46.010725830776614,
  } as __esri.Camera;
};

const addLayers = async () => {
  imgLayer = new ImageryTileLayer({
    id: "Elevation in bands",
    url: "https://tiledimageservices.arcgis.com/OLiydejKCZTGhvWg/arcgis/rest/services/VarzeaMin_DOMs/ImageServer",
    opacity: 0.9,
  });

  volGraphicsLayer = new GraphicsLayer({
    id: "volumetricGraphics",
  });

  // Define elevationInfo and set it on the layer
  const currentElevationInfo = {
    mode: "relative-to-ground",
    // offset: -1200,
    // featureExpressionInfo: {
    //   expression: 'Geometry($feature).z * 0.5',
    // },
    unit: "meters",
  } as unknown as __esri.GraphicsLayerElevationInfo;
  volGraphicsLayer.elevationInfo = currentElevationInfo;

  view.map.addMany([imgLayer, volGraphicsLayer]);

  // TODO: can I get rasterInfo from the layerView of imgLayer?
  // const ilv: __esri.LayerView = await view.whenLayerView(imgLayer);
  setupImgLayer();
};

const setupImgLayer = () => {
  imgLayerRasterSizeX = imgLayer?.rasterInfo?.pixelSize?.x;
  imgLayerRasterSizeY = imgLayer?.rasterInfo?.pixelSize?.y;

  console.log(
    "LayerView for imagery created!",
    imgLayer,
    imgLayerRasterSizeX,
    imgLayerRasterSizeY
  );

  imgLayer.renderer = {
    computeGamma: false,
    dra: false,
    gamma: [1],
    maxPercent: 0.25,
    minPercent: 0.25,
    max: 255,
    min: 0,
    statistics: [
      [
        1197.588_378_906_25, 1481.507_324_218_75, 1315.215_321_200_338_6,
        58.967_350_047_369_77,
      ],
    ],
    useGamma: false,
    stretchType: "min-max",
    type: "raster-stretch",
  } as unknown as __esri.RasterStretchRenderer;

  view.on('click', (event: any) => {
    debouncedUpdate(event).catch((error: any) => {
      console.error(error);
      if (!promiseUtils.isAbortError(error)) {
        throw error;
      }
    });
  });
};

const debouncedUpdate = promiseUtils.debounce(
  async (event: __esri.ViewClickEvent) => {
    // TODO: How to get data from [or into via AGP] RasterIdentifyResult.dataSeries https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryTileLayer.html#RasterIdentifyResult
    // TODO: Check the following flag to see if dataSeries is there: layer.rasterInfo.hasMultidimensionalTranspose (not documented!!) => https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryTileLayer.html#rasterInfo

    const mapPoint = event.mapPoint;

    // // TODO: more that 158 return empty pixelBlock! :/
    const pixelBlockWidth = 150;
    const pixelBlockHeight = 150;
    const requestExtent = new Extent({
      xmin: mapPoint.x,
      ymin: mapPoint.y,
      xmax: mapPoint.x + pixelBlockWidth,
      ymax: mapPoint.y + pixelBlockHeight,
      spatialReference: { wkid: 102_100 },
    });

    // const requestExtent = new Extent({
    //   xmin: imgLayerExtent.xmin+120,
    //   ymin: imgLayerExtent.ymin+120,
    //   xmax: imgLayerExtent.xmax-150,
    //   ymax: imgLayerExtent.ymax-150,
    //   spatialReference: { wkid: 102_100 },
    // });

    const pixelData = (await (
      imgLayer as unknown as ImageryTileLayer
    ).fetchPixels(
      requestExtent,
      requestExtent.xmax - requestExtent.xmin,
      requestExtent.ymax - requestExtent.ymin
    )) as __esri.PixelData;

    const resolutionX = requestExtent.width / pixelData.pixelBlock.width;
    const resolutionY = requestExtent.height / pixelData.pixelBlock.height;

    // ImageryTileLayer will fetch pixels from nearest raster data source level based on the requested resolution.
    // Similarly, you can calculate the width and height needed for 0.6meter resolution.
    console.log("resolution", resolutionX, resolutionY);
    console.log("pixelData", pixelData);

    updateChart(pixelData.pixelBlock.pixels as number[][]);
    createGraphics(pixelData);
  }
);

const createGraphics = (pixelData: __esri.PixelData) => {
  volGraphicsLayer.removeAll();

  const volGraphics: Graphic[] = [];
  const poly0 = create3dMesh(
    pixelData,
    pixelData.pixelBlock.pixels[0] as number[],
    "#FFD700"
  );
  volGraphics.push(...poly0);

  const poly1 = create3dMesh(
    pixelData,
    pixelData.pixelBlock.pixels[1] as number[],
    "#D700FF"
  );
  volGraphics.push(...poly1);

  volGraphicsLayer.addMany(volGraphics);
  view.goTo({
    target: poly0,
    tilt: 80
  });
}

const getLowPolyTriangle = (
  allPoints: number[][][],
  yIndex: number,
  xIndex: number,
  debug = false
): number[] => {
  /*
  We have continuous rows and columns of values, but as we're building triangles, we need to skip every 2nd value, offset from each other in consecutive rows.
      0.0   0.2   0.4   0.6   0.8 ...
         1.1   1.3   1.5   1.7...
      2.0   2.2   2.4 ...
         3.1   3.3   3.5 ...

  What we're building looks like:
  [0.0, 0.2, 1.1] [1.1, 1.3, 0.2]
  */
  const triangle =
    yIndex % 2 == 0
      ? xIndex % 2 == 0
        ? [
            ...allPoints[yIndex][xIndex],
            ...allPoints[yIndex][xIndex + 2],
            ...allPoints[yIndex + 1][xIndex + 1],
          ]
        : [
            ...allPoints[yIndex][xIndex + 1],
            ...allPoints[yIndex + 1][xIndex],
            ...allPoints[yIndex + 1][xIndex + 2],
          ]
      : xIndex % 2 == 0
      ? [
          ...allPoints[yIndex][xIndex + 1],
          ...allPoints[yIndex + 1][xIndex],
          ...allPoints[yIndex + 1][xIndex + 2],
        ]
      : [
          ...allPoints[yIndex][xIndex],
          ...allPoints[yIndex][xIndex + 2],
          ...allPoints[yIndex + 1][xIndex + 1],
        ];

  if (debug) {
    const indices =
      yIndex % 2 == 0
        ? xIndex % 2 == 0
          ? [
              `${yIndex}.${xIndex}`,
              `${yIndex}.${xIndex + 2}`,
              `${yIndex + 1}.${xIndex + 1}`,
            ]
          : [
              `${yIndex}.${xIndex + 1}`,
              `${yIndex + 1}.${xIndex}`,
              `${yIndex + 1}.${xIndex + 2}`,
            ]
        : xIndex % 2 == 0
        ? [
            `${yIndex}.${xIndex + 1}`,
            `${yIndex + 1}.${xIndex}`,
            `${yIndex + 1}.${xIndex + 2}`,
          ]
        : [
            `${yIndex}.${xIndex + 1}`,
            `${yIndex + 1}.${xIndex}`,
            `${yIndex + 1}.${xIndex + 2}`,
          ];
    console.log(xIndex, indices.join(", "));
  }
  return triangle;
};

const getTriangle = (
  allPoints: number[][][],
  yIndex: number,
  xIndex: number,
  debug = false
): number[] => {
  /*
  We have continuous rows and columns of values, but as we're building triangles, we need to skip every 2nd value, offset from each other in consecutive rows.
      0.0   0.1   0.2   0.3   0.4   0.5 ...
      1.0   1.1   1.2   1.3   1.4   1.5...
      2.0   2.1   2.2   2.3   2.4   2.5 ...
      3.0   3.1   3.2   3.3   3.4   3.5...

  What we're building looks like:
  [0.0, 0.1, 1.0] [0.1, 1.0, 1.1]
  [0.1, 0.2, 1.1] [0.2, 1.1, 1.2]
  */
  const triangle = [
    ...allPoints[yIndex][xIndex],
    ...allPoints[yIndex][xIndex + 1],
    ...allPoints[yIndex + 1][xIndex],
    ...allPoints[yIndex][xIndex + 1],
    ...allPoints[yIndex + 1][xIndex],
    ...allPoints[yIndex + 1][xIndex + 1],
  ];

  if (debug) {
    const indices = [
      `${yIndex}.${xIndex}`,
      `${yIndex}.${xIndex + 1}`,
      `${yIndex + 1}.${xIndex}`,
      `${yIndex}.${xIndex + 1}`,
      `${yIndex + 1}.${xIndex}`,
      `${yIndex + 1}.${xIndex + 1}`,
    ];
    console.log(xIndex, indices.join(", "));
  }
  return triangle;
};
const create3dMesh = (
  pixelData: __esri.PixelData,
  zValues: number[],
  symbolColor: string | __esri.Color,
  lowPoly = false
) => {
  const positionAll: number[] = [];

  const allPoints: number[][][] = [];
  const zAdd = -1200;

  // TODO: figure out raster size: rasterinfo provides pixel size from LoD 5, but from which LoD am I getting the data?
  // imgLayerRasterSizeX
  // imgLayerRasterSizeY

  // iterate through zValues and put them into rows and columns, according to pixelBlock size
  zValues.forEach((zValue: number, index: number): void => {
    const posY = Math.floor(index / pixelData.pixelBlock.height);

    const posX = Math.floor(index % pixelData.pixelBlock.height);
    if (!allPoints[posY]) allPoints[posY] = [];

    allPoints[posY][posX] = [
      pixelData.extent.xmin + posX,
      pixelData.extent.ymin + posY,
      zValue + zAdd > -1000 ? zValue + zAdd : 0, // pseudo correction of invalid values
    ];
  });

  // iterate through rows and columns and get triangles for mesh
  for (let y = 0; y < allPoints.length - 3; y++) {
    for (let x = 0; x < allPoints[0].length - 3; x++) {
      const t = lowPoly
        ? getLowPolyTriangle(allPoints, y, x)
        : getTriangle(allPoints, y, x);
      positionAll.push(...t);
    }
  }

  // safety precautions: mesh positions have to be multiplier of 9
  const position = positionAll.slice(
    0,
    positionAll.length - (positionAll.length % 9)
  );

  // create mesh graphic
  const g = new Graphic({
    geometry: new Mesh({
      spatialReference: pixelData.extent.spatialReference,
      vertexAttributes: {
        position,
      },
    }),
    symbol: {
      type: "mesh-3d",
      symbolLayers: [
        {
          type: "fill",
          material: {
            color: symbolColor,
          },
          outline: { color: symbolColor },
          edges: {
            type: "solid",
            color: [50, 50, 50, 0.5],
          },
        },
      ],
    } as unknown as __esri.MeshSymbol3D,
  });
  return [g];
};

const addChart = () => {
  Chart.register(...registerables);

  const chartCanvas = document.getElementById(
    "chart-canvas"
  ) as HTMLCanvasElement;

  chart = new Chart(chartCanvas, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Elevation difference by frequency",
          data: [],
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
      },
    },
  });
}

const updateChart = (pixels: number[][]) => {
  // set default chart font color to white
  Chart.defaults.color = "#fff";

  const elevationDiff = pixels[0].map((pxVal: number, i: number) => Math.round(pixels[1][i]) - Math.round(pxVal))
  const elevationCounts = elevationDiff.reduce((prev: any, curr: number) => {
    prev[curr] = prev[curr] === undefined ? 1 : prev[curr] += 1;
    return prev;
  }, {});
  const elevationStats = Object.keys(elevationCounts).map((key: string) => {
    return {
      x: parseInt(key),
      y: elevationCounts[key]
    } 
  })

  chart.data.datasets[0].data = elevationStats;
  chart.update();
};

const initApp = () => {
  setupView();
  addLayers();
  addChart();
};
