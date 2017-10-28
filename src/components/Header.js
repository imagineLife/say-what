import React from 'react';
import './Header.css';

export default function Header(props) {

    return (
      <header role="banner">
        <h1>{props.pageHeader.title}</h1>
        <h2>{props.pageHeader.text}</h2>
      </header>
    );
}
