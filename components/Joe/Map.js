/*import React from 'react'
import GoogleMapReact from 'google-maps-react';
class GMaps extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };
  render() {
    return (
      <div>
        <GoogleMapReact
          style={{width: "100%", height: "400px"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          />
      </div>
    )
  }
}
export default GMaps*/



import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
const containerStyle = {
  width: '100%',
  height: '400px'
}
const zoom = 12
const center = {
  lat: 30.266666,
  lng: -97.733330
}
function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCOEPSKdiqrWymwLr2oDhdjwB8a6sMITgA"
  })
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
    </div>
  ) : <></>
}
//export default Map
export default React.memo(Map)
