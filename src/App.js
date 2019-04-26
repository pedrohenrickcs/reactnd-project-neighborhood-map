import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="map"></div>
	);
}

function initMap(params) {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: -23.584642,
			lng: -46.675428
		},
		zoom: 13
	});
}

export default App;
