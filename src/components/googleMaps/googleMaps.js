import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapGoogle extends Component {

    state = {
        place: {},
        marker: {},
        showingInfoWindow: false
    };

    clickMarker = (props, marker, e) => {
        
        console.log('maark', props);

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

    render() {
        console.log('render', this.props);
        return (
            <div className="map">
                <Map 
                    google={this.props.google} 
                    zoom={14}  
                    initialCenter={{ lat: -23.5843807, lng: -46.6784441 }}
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