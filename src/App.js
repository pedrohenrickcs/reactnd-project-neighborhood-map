import React, { Component, Fragment } from 'react';
import InfoBar from './components/infoLocal/infoLocal';
import GoogleMaps from './components/googleMaps/googleMaps';
import ReactDOM from 'react-dom';
import './App.scss';
import KeyApp from './components/utils/keys';

export default class Foursquare extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            markers: [],
            filteredItems: [],
            markerActive: null,
            showingInfoWindow: false
        };
    }
    
    params = {
        'll': '-23.557552800000003, -46.675900299999995',
        'query': 'food',
        'limit': '30'
    };
    
	fetchLocation() {
        KeyApp.venues.getVenues(this.params)
        .then(res=> {

            const idVenue = res.response.venues.map((e) => {
                return this.params = e.id;
            })
            
            this.setState({ items: res.response.venues, filteredItems: res.response.venues, params: idVenue });
        })
    }
    
    filterLocation(term) {
        const resultFilter = this.state.items.filter((item) => {
            return item.name.toLowerCase().includes(term.toLowerCase());
        });     

        this.setState({ filteredItems: resultFilter })
    }
    
    componentDidMount() {
        this.fetchLocation();
    }

    getMarkerRef = (ref) => {        
        if (ref !== null) {
            this.setState(prevState => ({
                markers: [...prevState.markers, ref]
            }));
        }
    }

    clickListItem = (item) => {

        const itemSelected = this.state.markers.filter((marker) => {
            return item.name === marker.props.name;
        })
        
        this.clickMarker(null, itemSelected[0].marker);
    }

    clickMarker = (props, marker) => {        
        this.setState({
            markerActive: marker,
            showingInfoWindow: true
        });
    };

    render() {
        
        const place = this.state;
        
        return (
            <div>
				<Fragment>
					<main>
						<InfoBar
                            places={place.filteredItems}
                            fetchLocation={this.fetchLocation}
                            clickMarker={this.clickMarker}
                            filterLocation={(termo) => this.filterLocation(termo)} 
                            clickListItem={(item) => this.clickListItem(item)}
                            pageWrapId={'page-wrap'}
						/>
                        <GoogleMaps
                            places={place.filteredItems}
                            markerRef={this.getMarkerRef}
                            clickMarker={this.clickMarker}
                            markerActive={place.markerActive}
                            showingInfoWindow={place.showingInfoWindow}
                        />
                    </main>
                </Fragment>
            </div>
        )
    }
}

ReactDOM.render(
  <Foursquare/>,
  document.getElementById('root')
);