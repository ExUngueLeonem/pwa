import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { Map } from "leaflet";

// module
import { useGeolocation } from "../model/useGeolocation";

// style
import "./map.css";
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

  const flyToMyPosition = () => {
    const map = mapRef?.current
    if (!map) return console.log("map не найден", map)
    if (!position) return console.log("position не найден", position)
    map.flyTo(position, 17, {
      duration: 1
    });
  }

  return (
    <>
      <div className={"markercluster-map"}>

        {position &&
          <MapContainer
            ref={mapRef}
            center={position}
            // center={[51.0, 19.0]}
            zoom={16}
            maxZoom={18}
            scrollWheelZoom={false}
            className={"markercluster-map"}
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

        <button
          onClick={flyToMyPosition}
        >

          flyToMyPosition
        </button>
      </div>
    </>
  )
}