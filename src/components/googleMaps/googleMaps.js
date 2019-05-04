import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { loadPartialConfig } from '@babel/core';

export class MapGoogle extends Component {

    state = {
        place: {},
        marker: {},
        showingInfoWindow: false,
        items: []
    };

    clickMarker = (props, marker, e) => {
        this.setState({
            place: props,
            markerActive: marker,
            showingInfoWindow: true
        });
    }

    MapClicked = (props) => {
         if (this.state.showingInfoWindow) {
             this.setState({
                 showingInfoWindow: false,
                 activeMarker: null
             })
         }
     };

     componentWillUpdate() {
         this.getGeoLocation()
     }

    getGeoLocation = () => {
         if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(
                 position => {                     
                     this.setState({
                         lat: position.coords.latitude,
                         lng: position.coords.longitude
                     })
                 }
             )
         }
     }

    render() {        

        console.log('this render', this);        
        
        return (
            <div className="map">
                <Map 
                    google={this.props.google} 
                    zoom={14}  
                    initialCenter={{ lat: -23.557552800000003, lng: -46.675900299999995 }}

                    onClick={this.MapClicked}>
                    
                    <Marker
                        onClick={this.clickMarker}
                        name={'Current location'} />

                    <InfoWindow
                        marker={this.state.markerActive}
                        visible={this.state.showingInfoWindow}
                        >
                        <div>
                            <h1>{this.state.place.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDehkUDHtobclpcnckcmIgEmakMHA_ARGo')
})(MapGoogle)