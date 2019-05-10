import React, {Component, Fragment, useState} from 'react';
import InfoBar from './components/infoLocal/infoLocal';
import MapGoogle from './components/googleMaps/googleMaps';
import ReactDOM from 'react-dom';
import './App.scss';
import KeyApp from './components/utils/keys';

const params = {
    'll': '-23.557552800000003, -46.675900299999995',
    'query': 'food',
    'limit': '20'
};

export default class Foursquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

	fetchLocation() {
		KeyApp.venues.getVenues(params)
			.then(res=> {				
			this.setState({ items: res.response.venues });
		});
	}

    componentDidMount() {            
		this.fetchLocation();
    }

    
    render() {
        // const [infoWindowIsOpen, setInfoWindowIsOpen] = useState([]);
		
        const place = this.state;

        console.log('place', place);
        
        
        return (
            <div>
                <div>Items:</div>
				<Fragment>
					<main>
						<InfoBar
                            places={place.items}
                            // infoWindowIsOpen={infoWindowIsOpen}
						/>
                        <MapGoogle
                            places={place.items}
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