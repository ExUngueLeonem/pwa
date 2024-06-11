import { MapContainer, TileLayer } from "react-leaflet";
import { useGeolocation } from "../model/useGeolocation";
import "./map.css";

export const Map = () => {

  const { position } = useGeolocation();

  return (
    <>
      {position &&
        <MapContainer
          center={position}
          // center={[51.0, 19.0]}
          zoom={4}
          maxZoom={18}
          scrollWheelZoom={false}
          className={"markercluster-map"}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/*<Marker position={position}>*/}
          {/*  <Popup>*/}
          {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
          {/*  </Popup>*/}
          {/*</Marker>*/}
        </MapContainer>
      }
    </>
  )
}