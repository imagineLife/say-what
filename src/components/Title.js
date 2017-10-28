import React from 'react';
import './Header.css';

export default function Section(props) {

    return (
        <header>
            <h3>{props.title}</h3>
        </header>
    );
}
