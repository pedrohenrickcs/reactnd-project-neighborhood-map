import React, { Component, Fragment } from 'react';
import InfoBar from './components/infoLocal/infoLocal';
import GoogleMaps from './components/googleMaps/googleMaps';
import ReactDOM from 'react-dom';
import './App.scss';
import KeyApp from './components/utils/keys';
import * as MapsAPI from './components/utils/foursquareApi';

const params = {
    'll': '-23.557552800000003, -46.675900299999995',
    'query': 'food',
    'limit': '20'
};

const findItems = (id, categoria) => {
    console.log('ID', id);
    
    MapsAPI.getVenue(id)
        .then(res => {
            console.log('res', res);
        })
}

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

	fetchLocation() {
		KeyApp.venues.getVenues(params)
			.then(res=> {
			this.setState({ items: res.response.venues, filteredItems: res.response.venues });
		});
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
        // console.log('REF', ref);
        
        if (ref !== null) {
            this.setState(prevState => ({
                markers: [...prevState.markers, ref]
            }));
        }
    }

    clickListItem = (item) => {
        console.log('item', item);

        const itemSelected = this.state.markers.filter((marker) => {
            return item.name === marker.props.name;
        })
        
        // console.log('itemSelected', itemSelected[0]);
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
                <div>Items:</div>
				<Fragment>
					<main>
						<InfoBar
                            places={place.filteredItems}
                            fetchLocation={this.fetchLocation}
                            clickMarker={this.clickMarker}
                            filterLocation={(termo) => this.filterLocation(termo)} 
                            clickListItem={(item) => this.clickListItem(item)}
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