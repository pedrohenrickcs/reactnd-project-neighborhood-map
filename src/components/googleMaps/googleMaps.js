import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapGoogle extends Component {
    
    state = {
        place: {},
        marker: {},
        showingInfoWindow: false
    };
    
    clickMarker = (props, marker, e) => {
        this.setState({
            place: props,
            markerActive: marker,
            showingInfoWindow: true
        });
    };
    
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
    };
    
    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {                     
                    this.setState({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                }
            )}
        }
        
        render() {
            
            const { places } = this.props;
            const googleProps = this.props.google;

            console.log('google', this);
            
            return (
                <div className="map">
                    <Map
                        google={googleProps} 
                        zoom={14}  
                        initialCenter={{ lat: -23.557552800000003, lng: -46.675900299999995 }}
                        onClick={this.MapClicked}>

                        {places.map((e) =>                         
                            <Marker
                                key={e.id}
                                onClick={this.clickMarker}
                                name={e.name} 
                                position={{ lat: e.location.lat, lng: e.location.lng }}
                                // animation={googleProps.maps.Animation.DROP}
                            />
                        )}
                        
                        <InfoWindow
                            marker={this.state.markerActive}
                            visible={this.state.showingInfoWindow}>
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