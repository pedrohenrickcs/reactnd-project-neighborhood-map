import React from 'react';
import SearchBar from '../searchResult/searchResult';
import { slide as Menu } from "react-burger-menu";

const InfoBar = (props) => {
	
    const handleSubmit = (e) => props.filterLocation(e)	
    
    return (
        <Menu {...props}
              isOpen={ true }
              noOverlay
              className="box-info">
            <SearchBar onSubmit={handleSubmit} />
            <h1>Localidades</h1>
            <ul className="box-info__text">
                {props.places.map((place) => (
                    <li key={place.id}
                        className="menu-item"
                        onClick={() => props.clickListItem(place)}
                        >
                        <img src={`${place.categories[0].icon.prefix}bg_32${place.categories[0].icon.suffix}`} alt={`${place.categories[0].name}`} className="box-info__text-ico"/>
                        {place.name}
                    </li>
                ))}
            </ul>
        </Menu>
    )
}

export default InfoBar;