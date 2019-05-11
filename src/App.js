import React, { Component, Fragment } from 'react';
import InfoBar from './components/infoLocal/infoLocal';
import MapGoogle from './components/googleMaps/googleMaps';
import ReactDOM from 'react-dom';
import './App.scss';
import KeyApp from './components/utils/keys';
import * as MapsAPI from './components/utils/foursquareApi';

const params = {
    'll': '-23.557552800000003, -46.675900299999995',
    'query': 'food',
    'limit': '20'
};

// const findItems = (id, categoria) => {
//     console.log('ID', id);
    
//     MapsAPI.getVenue(id)
//         .then(res => {
//             console.log('res', res);
//         })
// }

export default class Foursquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            filteredItems: []
        };
    }

	fetchLocation() {
		KeyApp.venues.getVenues(params)
			.then(res=> {
			this.setState({ items: res.response.venues, filteredItems: res.response.venues });
		});
    }
    
    filterLocation(term) {
        console.log('term', term);
        const resultFilter = this.state.items.filter((item) => {
            return item.name.toLowerCase().includes(term.toLowerCase());
        });        
        this.setState({ filteredItems: resultFilter })
        console.log('resultFilter', resultFilter);
    }
    
    componentDidMount() {
        this.fetchLocation();
    }
    
    clickMarker = (props, marker, e) => {
        console.log('props', props);
        
        this.setState({
            place: props,
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
						/>
                        <MapGoogle
                            places={place.filteredItems}
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