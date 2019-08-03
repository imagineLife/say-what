import React from 'react';
import './Title.css';

export default function Title({title}: {title: string}) {

    return (
        <header>
            <h3>{title}</h3>
        </header>
    );
}
