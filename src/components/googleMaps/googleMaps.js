import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import * as MapsAPI from '../utils/foursquareApi';

export class GoogleMaps extends Component {
    
    state = {
        place: {},
        marker: {},
        showingInfoWindow: false
    };

    // findItems = (id, categoria) => {
    //     console.log('ID', id);

    //     MapsAPI.getVenue(id)
    //         .then(res => {
    //             console.log('res', res);
    //         })
    // }
    
    MapClicked = (props) => {
        // this.findItems()
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    filterId = () => {
        const r = this.props.places.map((resultId) => {
            console.log('asf', this);
            return this.props.places.params = resultId.id
        })

        this.setState({ params: r })
    } 
    
    componentDidMount() {
        this.filterId()
    }

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
            
            const { places, markerRef, clickMarker, markerActive, showingInfoWindow, fetchPhoto, params } = this.props;
            const googleProps = this.props.google;            

            console.log('PLACE', this.props);
			
            return (
                <div className="map">
                    <Map
                        google={googleProps}
                        zoom={14}  
                        initialCenter={{ lat: -23.557552800000003, lng: -46.675900299999995 }}
                        onClick={this.MapClicked}
                        >

                        {places.map((e) => 
                            <Marker
                                key={e.id}
                                onClick={(props, marker) => clickMarker(props, marker)}
								name={e.name} 
								ref={markerRef}
                                draggable={true}
                                title={e.categories[0].name}
                                address={e.location.formattedAddress[0]}
                                position={{ lat: e.location.lat, lng: e.location.lng }}
                                // animation={google.maps.Animation.DROP}
                                // params={e.id}
                            >
							</Marker>
						)}
						
						<InfoWindow
							marker={markerActive}
                            visible={showingInfoWindow}
                            infos={fetchPhoto}
							>
							<div className="window">
								<h1 className="window__local">{markerActive && markerActive.name}</h1>
								<h2 className="window__address">{markerActive &&  markerActive.address}</h2>
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
})(GoogleMaps)