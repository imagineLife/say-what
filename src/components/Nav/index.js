import React from 'react';
import './Nav.css';
import NavLink from '../NavLink';
import HomeIcon from '../../../imgs/home.ico'
import SearchIcon from '../../../imgs/search.ico'
import UserIcon from '../../../imgs/user.ico'

export default function Nav() {
	//Help update this specific navLink text to change when signed-in-or-not :) 

//array of Objects,
//these are properties of each NavLink below	
	const navLinkArray = [
		{
			linkTo : "/",
			imgSrc : HomeIcon,
			alt : "SayWhat?!"
		},
		{
			linkTo : "/speechData/default",
			imgSrc : SearchIcon,
			alt : "View A Speech"
		},
		{
			linkTo : "/login",
			imgSrc : UserIcon,
			alt : "Login / Sign Up"
		}
	];

//convert the array objects above into <NavLink />s
	const linkObjsToComponents = navLinkArray.map((navLink,ind) => {
		return <NavLink key={ind} linkTo={navLink.linkTo}  imgSrc={navLink.imgSrc}  linkTitle={navLink.alt}/>;
	})
	
    return (
		<nav>
			<ul>
				{linkObjsToComponents}
			</ul>
		</nav> 
    );
}
