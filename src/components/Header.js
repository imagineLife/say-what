import React from 'react';
import './Header.css';

export default function Header(props) {

    return (
      <header role="banner">
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </header>
    );
}
