import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapGoogle extends Component {
    render() {
        console.log('render', this.props);
        return (
            <div className="map">
                <Map 
                    google={this.props.google} 
                    zoom={14}  
                    initialCenter={{ lat: -23.5843807, lng: -46.6784441 }}>
                    
                    <Marker
                        onClick={() => {
                            // this.onMarkerClick
                            console.log('sdfsd');                            
                        }}
                        name={'Current location'} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDehkUDHtobclpcnckcmIgEmakMHA_ARGo')
})(MapGoogle)