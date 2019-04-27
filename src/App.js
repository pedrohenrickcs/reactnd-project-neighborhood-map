import React, {Fragment} from 'react';
import InfoBar from './components/infoLocal/infoLocal';
import MapGoogle from './components/googleMaps/googleMaps';

import './App.scss';

const App = () => {
    return(
        <Fragment>
            <main>
                <InfoBar
                />
                <MapGoogle
                    
                />
            </main>
        </Fragment>
    )
}

export default App;