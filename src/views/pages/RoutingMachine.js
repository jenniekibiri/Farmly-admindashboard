import { MapLayer } from "react-leaflet";

import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import Geocoder from "leaflet-control-geocoder";

import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import axios from "axios";
var geocoder = L.Control.Geocoder.nominatim()

const fetchData=()=>{
  axios
  .get(`${process.env.REACT_APP_BACKENDAPI}/api/order/list`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then((response) => {
  return response
  })
  .catch((error) => {
    console.log(error);
  });
}

  const data =fetchData()
  console.log(data)
class Routing extends MapLayer {

  createLeafletElement() {
    const { map } = this.props;    
    let leafletElement = L.Routing.control({
      geocoder: geocoder,
      language: 'en',
      waypoints: [
        L.Routing.waypoint(null,"Ibis hotel, Kanisa Rd, Nyeri"),
        L.Routing.waypoint(null,"Prestige Plaza, Kimathi Way, Nyeri")
      ]
    }).addTo(map.leafletElement);
    console.log(leafletElement.getPlan())
    return leafletElement.getPlan();
  }

}
export default withLeaflet(Routing);