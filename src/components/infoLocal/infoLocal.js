import React from 'react';
import SearchResult from '../searchResult/searchResult';
import { InfoWindow } from 'google-maps-react';

const InfoBar = (props) => {  
    
    console.log('PROPS', props);

    return (
        <aside className="box-info">
            <SearchResult/>
            <h1>Localidades</h1>
            <ul className="box-info__text">
                {props.places.map((e) => (
                    <li key={e.id}  
                        onClick={(e) => {
                            console.log('clicou aqui', props);                           
                        }}>
                        <img src={`${e.categories[0].icon.prefix}bg_32${e.categories[0].icon.suffix}`} alt={`${e.categories[0].name}`} className="box-info__text-ico"/>
                        {e.name}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default InfoBar;