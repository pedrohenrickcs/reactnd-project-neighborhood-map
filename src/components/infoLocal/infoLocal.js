import React from 'react';
import SearchResult from '../searchResult/searchResult';

const InfoBar = () => {
    return (
        <aside className="box-info">
            <SearchResult/>
            <h1>Localidades</h1>
            <ul className="box-info__text">
                <li>item 1</li>
            </ul>
        </aside>
    )
}

export default InfoBar;