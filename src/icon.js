import L from "leaflet"
import icon from './location-dot-solid.svg'

export default L.icon({
    iconSize: [30, 40],
    iconAnchor: [11, 21],
    popupAnchor: [3, -30],
    iconUrl: icon
})