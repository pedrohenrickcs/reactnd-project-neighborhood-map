import React, { useState } from 'react';
import InfoBar from '../infoLocal/infoLocal';

const ListPlaces = (props) => {

    console.log('dsffdsfdfewrr', props);

    const [selectedItem, setSelectedItem] = useState([]);
    const [infoWindowIsOpen, setInfoWindowIsOpen] = useState([]);

    const openInfoWindow = index => setInfoWindowIsOpen(index);

    const closeInfoWindow = () => setInfoWindowIsOpen([]);


    const handleListItemClick = (index) => {
        setSelectedItem(index);
        openInfoWindow(index);
    };

    const infoWindowControls = {
        infoWindowIsOpen,
        setInfoWindowIsOpen,
        openInfoWindow,
        closeInfoWindow
    }

    const sideBarControls = {
        selectedItem,
        handleListItemClick
    }

    return (
        <InfoBar
        	infoWindowControls={infoWindowControls}
            sideBarControls={sideBarControls}
        />
    )
}

export default ListPlaces;