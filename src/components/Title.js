import React from 'react';
import './Title.css';

export default function Title(props) {

    return (
        <header>
            <h3>{props.title}</h3>
        </header>
    );
}
