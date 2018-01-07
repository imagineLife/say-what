import React from 'react';
import './Nav.css';
import NavLink from '../NavLink';

export default function Nav() {
	//Help update this specific navLink text to change when signed-in-or-not :) 
	
	const navLinkArray = [
		{
			linkTo : "/",
			imgSrc : "imgs/home.ico",
			alt : "Home"
		},
		{
			linkTo : "/speechData/default",
			imgSrc : "/imgs/search.ico",
			alt : "View A Speech"
		},
		{
			linkTo : "/login",
			imgSrc : "imgs/user.ico",
			alt : "Sign Up"
		}
	];

	const linkObjsToComponents = navLinkArray.map((navLink,ind) => {
		return <NavLink key={ind} linkTo={navLink.linkTo}  imgSrc={navLink.imgSrc}  linkTitle={navLink.alt}/>;
	})

	// const navLink = (true === true) 
	// const navLink = 
	// 					// ? (<a href="/login"><img src="/imgs/user.ico" className="icon" alt="Sign Up" /><span className="menuLabel">Sign Up</span></a>)
	// 					(
	// 						<li className='liWithIcon'>
	// 							<Link to="/login">
	// 								<img 
	// 									src="/imgs/user.ico" 
	// 									className="icon" 
	// 									alt="Sign Up" 
	// 								/>
	// 								<span className="menuLabel">Sign Up</span>
	// 							</Link>
	// 						</li>
	// 					)
						// : (<a href="/speechPicker"><img src="/imgs/user.ico" className="icon" alt="SomethingElse" /><span className="menuLabel">SomethingElse</span></a>)

    return (
		<nav>
			<ul>
				{linkObjsToComponents}
			</ul>
		</nav> 
    );
}
