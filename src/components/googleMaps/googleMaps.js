import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapGoogle extends Component {
    
    state = {
        place: {},
        marker: {},
        showingInfoWindow: false
    };
    
    clickMarker = (props, marker, e) => {
        console.log('props', props);
            
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

            console.log('google', places);

            console.log('THIS PLACE', this.state.place);
            
            
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
                                // draggable={true}
                                title={e.categories[0].name} 
                                address={e.location.formattedAddress[0]}
                                position={{ lat: e.location.lat, lng: e.location.lng }}
                                // animation={googleProps.maps.Animation.DROP}
                            />     
                        )}

                        <InfoWindow
                            marker={this.state.markerActive}
                            visible={this.state.showingInfoWindow}
                            >
                            <div className="window">
                                <h1 className="window__local">{this.state.place.name}</h1>
                                <h2 className="window__address">{this.state.place.address}</h2>
                                {/* <h3>{this.state.address.address}</h3> */}
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