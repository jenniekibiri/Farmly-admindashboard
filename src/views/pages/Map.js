import Header from "components/Headers/Header.js";
import React from "react";
import './index.css'

import LeafletMap from "./LeafletMap.js";
import OrdersToRoute from "./OrdersToRoute";
function MapComponent() {
  return (
    <div>
      <Header/>
      <div className='mt-3'></div>
         <LeafletMap />
         <OrdersToRoute/>
    </div>
  );
}
export default MapComponent;