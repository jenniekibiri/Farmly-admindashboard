import Header from "components/Headers/Header.js";
import React from "react";
import './index.css'

import LeafletMap from "./LeafletMap.js";
function MapComponent() {
  return (
    <div>
      <Header/>
         <LeafletMap />
    </div>
  );
}
export default MapComponent;