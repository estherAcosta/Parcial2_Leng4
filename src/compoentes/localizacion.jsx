import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'

const DefaultLocation = { lat: 1.147395754817287, lng: -76.64051892892026};
const DefaultZoom = 17;

const Localizacion = () => {

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [localizacion, setLocalizacion] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  function handleResetLocation(){
    setDefaultLocation({ ...DefaultLocation});
    setZoom(DefaultZoom);
  }

  return (
    <div>
      {/* <label>Latitute:</label> */}
      <input type="hidden" value={localizacion.lat} disabled />
      {/* <label>Longitute:</label> */}
      <input type="hidden" value={localizacion.lng} disabled />
      {/* <label>Zoom:</label> */}
      <input type="hidden" value={zoom} disabled />
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        mapTypeId="hybrid"
        style={{ height: "500px" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
      <button onClick={handleResetLocation}>Volver Ubicacion</button>
    </div>
  );
}
export default Localizacion