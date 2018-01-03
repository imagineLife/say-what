import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav() {
	//Help update this specific navLink text to change when signed-in-or-not :) 
	
	// const navLink = (true === true) 
	const navLink = 
						// ? (<a href="/login"><img src="/imgs/user.ico" className="icon" alt="Sign Up" /><span className="menuLabel">Sign Up</span></a>)
						(<Link to="/login"><img src="/imgs/user.ico" className="icon" alt="Sign Up" /><span className="menuLabel">Sign Up</span></Link>)
						// : (<a href="/speechPicker"><img src="/imgs/user.ico" className="icon" alt="SomethingElse" /><span className="menuLabel">SomethingElse</span></a>)
    return (
		<nav>
			<ul>
				<li className='liWithIcon'>
					<Link to="/">
						<img src={process.env.PUBLIC_URL+'/imgs/home.ico'} className="icon" alt='home' width="50" height="auto"/>
						<span className="menuLabel">Home</span>
					</Link>
				</li>
				<li className='liWithIcon'>
					<Link to='/speechData/default'>
						<img src={process.env.PUBLIC_URL+'/imgs/search.ico'} className="icon" alt='View A Speech' />
						<span className="menuLabel">View A Speech</span>
					</Link>
				</li>
				<li className='liWithIcon'>
					{navLink}
				</li>
			</ul>
		</nav> 
    );
}
