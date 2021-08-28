import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [L.latLng(0.5518,36.944 ), L.latLng(0.4832,37.127),L.latLng(0.5832,37.127)]
    }).addTo(map.leafletElement);
    console.log(leafletElement.getPlan())
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);