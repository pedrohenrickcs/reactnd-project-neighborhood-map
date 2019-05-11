import React from 'react';
import SearchBar from '../searchResult/searchResult';

const InfoBar = (props) => {  
	
	const handleSubmit = (e) => props.filterLocation(e)	
    
    return (
        <aside className="box-info">
    		<SearchBar onSubmit={handleSubmit} />
            <h1>Localidades</h1>
            <ul className="box-info__text">
                {props.places.map((place) => (
                    <li key={place.id}
						onClick={() => props.clickListItem(place)}
						
						>
                        <img src={`${place.categories[0].icon.prefix}bg_32${place.categories[0].icon.suffix}`} alt={`${place.categories[0].name}`} className="box-info__text-ico"/>
                        {place.name}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default InfoBar;