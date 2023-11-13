import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneView from "@arcgis/core/views/SceneView";


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

// view.when().then(() => {
//   view.watch("camera", (c) => console.log(JSON.stringify(c)));
// });


const treesLayer = new FeatureLayer({
  title: "Berlin trees",
  minScale: 5000,
  url: treesUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "on-the-ground",
  }
});

const streetsLayer = new FeatureLayer({
  title: "Berlin streets",
  url: streetsUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "on-the-ground",
  }
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
