import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";

/********************************************************************
 * Step 1 - Add scene with basemap *
 ********************************************************************/

const map = new Map({
  basemap: "topo-3d",
  ground: "world-elevation",
});

const view = new SceneView({
  container: document.querySelector("#app") as HTMLDivElement,
  center: [13.405, 52.52],
  scale: 50000,
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

// view.when().then(() => {
//   view.watch("camera", (c) => console.log(JSON.stringify(c)));
// });
