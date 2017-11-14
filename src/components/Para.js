import React from 'react';
import './Para.css';

export default function Para(props) {
    return (
		<p className={props.compClass} >{props.text}</p>
    );
}
