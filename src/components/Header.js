import React from 'react';
import './Header.css';

export default function Header(props) {
	console.log('props.title is =>',props.title);
	
	let subTitle, title;
	let headerStyle;

	if(props.imagePr){
		headerStyle = {
		  background: `url(${ props.imagePr }) no-repeat center center`,
		};
	}

	
	if(props.subTitle){		
		let subTitle = <h3>{props.subTitle}</h3>;
		return subTitle;
	}

	if(props.title){		
		title = <h3>{props.title.toString()}</h3>;
		return title;
	}


    return (
      <header style={headerStyle} role="banner">
      	{title}
        {subTitle}
      </header>
    );
}
