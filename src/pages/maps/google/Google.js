import React from 'react';
import {LoadScript, GoogleMap, Marker} from '@react-google-maps/api';

import s from './Google.module.scss';



class Maps extends React.Component {

  render() {
    return (
      <div>
        <h1 className={`${s.MapTitle} page-title`}>
          Google <span className="fw-semi-bold">Maps</span>
        </h1>
        <div className={s.MapContainer}>
          <LoadScript googleMapsApiKey="AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg">
            <GoogleMap zoom={12} center={{lat:-37.813179,lng:144.950259}}
              mapContainerStyle={{height:'100%',width:'100%'}}>
              <Marker position={{lat:-37.813179,lng:144.950259}} />
            </GoogleMap>
          </LoadScript>
        </div>

      </div>);
  }

}

export default Maps;
