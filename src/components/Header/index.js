import React from 'react';
import './Header.css';

export default function Header({imageLinkProp, title, subTitle}) {
  console.log('imageLinkProp')
  console.log(imageLinkProp)
  let myLink = 'trump.jpg'
  
	let sectionStyle = {
	  background: `url(/src/imgs/${myLink}) no-repeat center center`,
	  backgroundSize: `cover`
	};

    return (
      <header style={sectionStyle} role="banner" className="pageHeader">
        <h1 className="titleH1">{title}</h1>
        <h3 className="subTitle">{subTitle}</h3>
      </header>
    );
}
