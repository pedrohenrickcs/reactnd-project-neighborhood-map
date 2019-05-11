import React from 'react';
import SearchBar from '../searchResult/searchResult';

const InfoBar = (props) => {  
	
	const handleSubmit = (e) => props.filterLocation(e)
    
    return (
        <aside className="box-info">
    		<SearchBar onSubmit={handleSubmit} />
            <h1>Localidades</h1>
            <ul className="box-info__text">
                {props.places.map((e) => (
                    <li key={e.id}
                        onClick={props.clickMarker}>

                        <img src={`${e.categories[0].icon.prefix}bg_32${e.categories[0].icon.suffix}`} alt={`${e.categories[0].name}`} className="box-info__text-ico"/>
                        {e.name}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default InfoBar;