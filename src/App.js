import React, {Component, Fragment} from 'react';
import InfoBar from './components/infoLocal/infoLocal';
import MapGoogle from './components/googleMaps/googleMaps';
import ReactDOM from 'react-dom';
import './App.scss';

const foursquare = require('react-foursquare')({
    clientID: 'HCZJBXBEBYIVTHQ3ITCH5PX0XOLS4NM1YI2CPY0NQEYTU0RT',
    clientSecret: 'VYHBWGOWOWCRQPMXJEPVOENKKKA3MFMC0QWJQ2ASNUQ0KWMS'
});

const params = {
    "ll": "-23.557552800000003, -46.675900299999995",
    "query": 'musculação'
};

export default class Foursquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
	}

	fetchLocation() {
		foursquare.venues.getVenues(params)
			.then(res=> {
				console.log('res', res);
				
			this.setState({ items: res.response.venues });
		});
	}

    componentDidMount() {            
		this.fetchLocation();
    }

    render() {
		
		const place = this.state;
		
        return (
            <div>
                <div>Items:</div>
				<Fragment>
					<main>
						<InfoBar
							places={place.items}
						/>
                        <MapGoogle
                            
                        />
                    </main>
                </Fragment>
            </div>
        )
    }
}

ReactDOM.render(
  <Foursquare /*sendLocation={ () => this.fetchLocation() }*/ />,
  document.getElementById('root')
);