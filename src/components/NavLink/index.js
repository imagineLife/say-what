import React from 'react';
import {Link} from 'react-router-dom';
import './navLink.css';

export default function NavLink({linkTo, imgSrc, linkTitle}: {
	linkTo: string,
	imgSrc: string,
	linkTitle: string
}) {

	return(
		<li className='liWithIcon'>
			<Link to= {linkTo}>
				<img 
					src= {imgSrc} 
					className="icon" 
					alt= {linkTitle} 
				/>
				<span className="menuLabel"> {linkTitle} </span>
			</Link>
		</li>
	);
}
