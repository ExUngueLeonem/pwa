import { useEffect, useState } from "react";

export const useGeolocation = () => {

  const [position, setPosition] = useState<[number, number] | null>(null)

  const onLocationSuccess = async (position: GeolocationPosition) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    setPosition([latitude, longitude])
  }

  const onLoacationInaccessible = () => {
    console.log("проверка позиции не разрешена")
  }

  useEffect(() => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(onLocationSuccess, onLoacationInaccessible)
  }, [])

  return {
    position
  }
}