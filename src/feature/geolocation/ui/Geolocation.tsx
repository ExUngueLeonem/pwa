import { useEffect } from "react";

export const Geolocation = () => {

  useEffect(() => {

  }, [])

  const onLocationSuccess = async (position: GeolocationPosition) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    alert(`${latitude}, ${longitude}`)
  }

  const onLoacationInaccessible = () => {
    console.log("проверка позиции не разрешена")
  }

  const requestLocationHandler = () => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(onLocationSuccess, onLoacationInaccessible)
  }

  return (
    <>
      <button
        onClick={requestLocationHandler}
      >
        getLocation
      </button>
    </>
  )

}