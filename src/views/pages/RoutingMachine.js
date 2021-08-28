import { MapLayer } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import Geocoder from "leaflet-control-geocoder";

import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
var geocoder = L.Control.Geocoder.nominatim()
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