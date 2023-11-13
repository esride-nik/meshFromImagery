import Map from "@arcgis/core/Map";
import { when } from "@arcgis/core/core/reactiveUtils";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneView from "@arcgis/core/views/SceneView";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";
import { LineSymbol3D, PathSymbol3DLayer } from "@arcgis/core/symbols";
import { UniqueValueRenderer } from "@arcgis/core/renderers";


const treesUrl = "https://services2.arcgis.com/jUpNdisbWqRpMo35/ArcGIS/rest/services/Baumkataster_Berlin/FeatureServer/0/";

const streetsUrl = "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/Berlin_Equal_Street_Names/FeatureServer";

const districtsUrl = "https://services2.arcgis.com/jUpNdisbWqRpMo35/arcgis/rest/services/BerlinRBS_Ortsteile_2017/FeatureServer";

const buildingsUrl = "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Buildings_Berlin/SceneServer";


/********************************************************************
 * Step 1 - Add scene with basemap *
 ********************************************************************/

const map = new Map({
  basemap: "topo-3d",
  ground: "world-elevation",
});

const view = new SceneView({
  container: document.querySelector("#app") as HTMLDivElement,
  map: map,
  camera: {
    position: {
      spatialReference: { latestWkid: 3857, wkid: 102100 },
      x: 1491506.456761522,
      y: 6892221.1440706095,
      z: 449.1962412856519,
    },
    heading: 331.4896155794407,
    tilt: 63.80679107867683,
  },
  environment: {
    atmosphereEnabled: false,
    starsEnabled: false,
  },
});


/**************************************************
 * Step 2 - Add a trees layer with a web style symbol *
 **************************************************/

const treesLayer = new FeatureLayer({
  title: "Berlin trees",
  minScale: 5000,
  url: treesUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "on-the-ground",
  },
  renderer: new SimpleRenderer({
    symbol: new WebStyleSymbol({
      name: "Populus",
      styleName: "EsriRealisticTreesStyle",
    }),
  }),
});

/**************************************************
 * Step 3 - Change the streets renderer to show a 3D line *
 **************************************************/
const FEMALE_COLOR = "#8400a8";
const MALE_COLOR = "#e6bc01";

const femaleStreetSymbol = {
  value: "F",
  symbol: new LineSymbol3D({
    symbolLayers: [
      new PathSymbol3DLayer({
        profile: "quad",
        material: {
          color: FEMALE_COLOR,
        },
        width: 10,
        height: 3,
      }),
    ],
  }),
};

const maleStreetSymbol = {
  value: "M",
  symbol: new LineSymbol3D({
    symbolLayers: [
      new PathSymbol3DLayer({
        profile: "quad",
        material: {
          color: MALE_COLOR,
        },
        width: 10,
        height: 3,
      }),
    ],
  }),
};

const streetsLayer = new FeatureLayer({
  title: "Berlin streets",
  url: streetsUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "on-the-ground",
  },
  renderer: new UniqueValueRenderer({
    field: "gender",
    uniqueValueInfos: [femaleStreetSymbol, maleStreetSymbol],
  }),
});

const districtsLayer = new FeatureLayer({
  title: "Berlin district boundaries",
  url: districtsUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "on-the-ground",
  }
});

map.addMany([districtsLayer, streetsLayer, treesLayer]);

view.whenLayerView(streetsLayer).then((layerView) => {
  when(
    // Update the chart whenever the user is not interacting with the scene
    () => !layerView.updating,
    async () => {
      // Query the features
      const results = await layerView.queryFeatures({
        geometry: view.extent,
      });
      console.log('query results', Date.now(), results);
    }
  )
});
