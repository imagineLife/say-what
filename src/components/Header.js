import React from 'react';
import './Header.css';

export default function Header(props) {
	let sectionStyle = {
	  background: `url(${ props.imagePr }) no-repeat center center`,
	  backgroundSize: `cover`
	};

    return (
      <header style={sectionStyle} role="banner">
        <h1 className="titleH1">{props.title}</h1>
        <h3 className="subTitle">{props.subTitle}</h3>
      </header>
    );
}
