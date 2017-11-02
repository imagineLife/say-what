import React from 'react';
import './Nav.css';

export default function Nav() {
	// const navItems = ['Home', 'See Some Data', 'Sign Up'];

    return (
		<nav>
			<ul>
				<li className='liWithIcon'>
					<a href='/'>
						<img src={process.env.PUBLIC_URL+'/imgs/home.ico'} className="icon" alt='home' width="50" height="auto"/>
					</a>
				</li>
				<li className='liWithIcon'>
					<a href='/speechData/alpha'>
						<img src={process.env.PUBLIC_URL+'/imgs/search.ico'} className="icon" alt='View A Speech' />
					</a>
				</li>
				<li className='liWithIcon'>
					<a href="/login">
						<img src={process.env.PUBLIC_URL+'/imgs/user.ico'} className="icon" alt='Sign Up' />
					</a>
				</li>
			</ul>
		</nav> 
    );
}
