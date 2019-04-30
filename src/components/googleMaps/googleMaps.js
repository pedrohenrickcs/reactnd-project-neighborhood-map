import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapGoogle extends Component {

    state = {
        place: {},
        marker: {},
        showInfo: false
    }

    clickMap = (props, active) => {
        console.log('maark', props);
        
        this.setState({
            place: props,
            marker: active,
            showInfo: true
        });
    }

    render() {
        console.log('render', this.props);
        return (
            <div className="map">
                <Map 
                    google={this.props.google} 
                    zoom={14}  
                    initialCenter={{ lat: -23.5843807, lng: -46.6784441 }}>
                    
                    <Marker
                        onClick={() => this.clickMap()}
                        name={'Current location'} />

                    <InfoWindow
                        marker={this.state.marker}
                        onOpen={this.windowHasOpened}
                        info={this.showInfo}
                    >

                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDehkUDHtobclpcnckcmIgEmakMHA_ARGo')
})(MapGoogle)