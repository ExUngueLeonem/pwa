import { RefObject } from "react";
import { Map } from "leaflet";
import { FaLocationArrow } from "react-icons/fa";

//module
import { useGeolocation } from "../model/useGeolocation";

//styles
import styles from "./flyToMyPositionButton.module.scss";
interface IProps {
  mapRef: RefObject<Map>;
}

export const FlyToMyPositionButton = (
  {
    mapRef,
  }: IProps) => {
  const { position } = useGeolocation();

  const flyToMyPosition = () => {
    const map = mapRef?.current
    if (!map) return console.log("map не найден", map)
    if (!position) return console.log("position не найден", position)
    map.flyTo(position, 17, {
      duration: 1
    });
  }

  return (
    <button
      className={styles.pos_button}
      onClick={flyToMyPosition}
    >
      <FaLocationArrow fontSize={"20px"} />
    </button>
  )
}