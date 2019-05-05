import React, {Component, Fragment} from 'react';
import InfoBar from './components/infoLocal/infoLocal';
import MapGoogle from './components/googleMaps/googleMaps';
import ReactDOM from 'react-dom';
import './App.scss';
import KeyApp from './components/utils/keys';

const params = {
    'll': '-23.557552800000003, -46.675900299999995',
    'query': 'Musculação',
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
				console.log('res', res);
				
			this.setState({ items: res.response.venues });
		});
	}

    componentDidMount() {            
		this.fetchLocation();
    }

    render() {
		
        const place = this.state;
        
        console.log('STATE', place);
        
        return (
            <div>
                <div>Items:</div>
				<Fragment>
					<main>
						<InfoBar
                            places={place.items}
						/>
                        <MapGoogle
                            places={place.items}
                            // onclick={this.MapClicked}
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