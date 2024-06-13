import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { Map } from "leaflet";

import { FlyToMyPositionButton } from "./flyToMyPositionButton";
// module
import { useGeolocation } from "../model/useGeolocation";

// style
import styles from "./c_map.module.scss";
import 'leaflet/dist/leaflet.css';

const MyComponent = () => {
  const mapEvents = useMapEvents({
    click: () => {
      console.log("useMapEvents click")
      mapEvents.locate()
    },
    locationfound: (location) => {
      console.log('useMapEvents location found:', location)
    },
  });
  return <></>
}

export const MapComponent = () => {
  const { position } = useGeolocation();
  const mapRef = useRef<Map>(null);

  return (
    <div className={styles.map_container}>
      {position &&
        <MapContainer
          ref={mapRef}
          center={position}
          // center={[51.0, 19.0]}
          zoom={16}
          maxZoom={18}
          scrollWheelZoom={false}
          className={styles.markercluster_map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Вы находитесь здесь
            </Popup>
          </Marker>
          <MyComponent />
        </MapContainer>
      }
      <FlyToMyPositionButton mapRef={mapRef} />
    </div>
  )
}