import React from 'react';
import {Link} from 'react-router-dom';
import './navLink.css';

export default function NavLink(props) {
	console.log('navLinkProps -->',props);
	return(
		<li className='liWithIcon'>
			<Link to="/login">
				<img 
					src="/imgs/user.ico" 
					className="icon" 
					alt="Sign Up" 
				/>
				<span className="menuLabel">Sign Up</span>
			</Link>
		</li>
	);
}
