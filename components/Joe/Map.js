import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
const containerStyle = {
  width: '100%',
  height: '400px'
}
const center = {
  lat: 30.266666,
  lng: -97.733330
}
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCOEPSKdiqrWymwLr2oDhdjwB8a6sMITgA"
  })
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
  ) : <></>
}
export default React.memo(MyComponent)
