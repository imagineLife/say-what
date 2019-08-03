import type {PropsTypes} from './flow'
import React from 'react';
import './Header.css';

export default function Header({imageFile, title, subTitle}: PropsTypes) {
  
	let sectionStyle = {
	  background: `url(/imgs/${imageFile}) no-repeat center center`,
	  backgroundSize: `cover`
	};

    return (
      <header style={sectionStyle} role="banner" className="pageHeader">
        <h1 className="titleH1">{title}</h1>
        <h3 className="subTitle">{subTitle}</h3>
      </header>
    );
}
