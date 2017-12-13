import React from 'react';
import './Nav.css';

export default function Nav() {
	// const navItems = ['Home', 'See Some Data', 'Sign Up'];
	// const navLink = `<a href="/login"><img src="${process.env.PUBLIC_URL}/imgs/user.ico" className="icon" alt="Sign Up" /><span className="menuLabel">Sign Up</span></a>`;
	//Help update this specific navLink text to change when signed-in-or-not :) 
	const navLink = (true === true) 
						? (<a href="/login"><img src="/imgs/user.ico" className="icon" alt="Sign Up" /><span className="menuLabel">Sign Up</span></a>)
						: (<a href="/speechPicker"><img src="/imgs/user.ico" className="icon" alt="SomethingElse" /><span className="menuLabel">SomethingElse</span></a>)
    return (
		<nav>
			<ul>
				<li className='liWithIcon'>
					<a href='/'>
						<img src={process.env.PUBLIC_URL+'/imgs/home.ico'} className="icon" alt='home' width="50" height="auto"/>
						<span className="menuLabel">Home</span>
					</a>
				</li>
				<li className='liWithIcon'>
					<a href='/speechData/5a1ad99f978ca2681f42df12'>
						<img src={process.env.PUBLIC_URL+'/imgs/search.ico'} className="icon" alt='View A Speech' />
						<span className="menuLabel">View A Speech</span>
					</a>
				</li>
				<li className='liWithIcon'>
					{navLink}
				</li>
			</ul>
		</nav> 
    );
}
