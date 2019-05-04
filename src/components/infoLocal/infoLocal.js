import React, { useEffect, useState } from 'react';
import SearchResult from '../searchResult/searchResult';

const InfoBar = (props) => {

    console.log('props', props);
    

    return (
        <aside className="box-info">
            <SearchResult/>
            <h1>Localidades</h1>
            <ul className="box-info__text">
                {props.places.map((e) => (
                    <li>
                        <img src={ `${e.categories[0].icon.prefix}bg_32${e.categories[0].icon.suffix}` }  alt={ `${e.categories[0].name}` } className="ico"/>
                        {e.name}
                    </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default InfoBar;