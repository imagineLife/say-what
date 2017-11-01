import React from 'react';
import './Header.css';

export default function Header(props) {

    return (
      <header role="banner">
        <h1>{props.title}</h1>
        <h3>{props.subTitle}</h3>
      </header>
    );
}
