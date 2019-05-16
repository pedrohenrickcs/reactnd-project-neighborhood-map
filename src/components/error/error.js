import React from 'react';
import ErrorImage from '../../images/error.gif';

export default function Error(props) {

	const divStyle = {
		background: '#000000',
		width: '100vw',
		height: '100vh',
		position: 'relative',
		zIndex: '999999',
	};
	const image = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		height: 'auto',
		width: 'auto',
	};

	return (
		<div style={divStyle}>
			<img style={image} src={ErrorImage} alt="Error" />
		</div>
	)
}