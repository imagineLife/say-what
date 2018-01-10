import React from 'react';
import './HeaderSplash.css';

export default function HeaderSplash(props) {
	let sectionStyle = {
	  background: `url(${ props.imagePr }) no-repeat center center`,
	  backgroundSize: `cover`
	};

    return (
      <header style={sectionStyle} role="banner" className="pageHeader">
        <h1 className="titleSplash">{props.title}</h1>
        <h3 className="subTitle">{props.subTitle}</h3>
      </header>
    );
}