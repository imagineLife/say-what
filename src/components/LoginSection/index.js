import React from 'react';
import './LoginSection.css';
import Title from '../Title';
import Para from '../Para';
import BeginForm from '../Forms/Begin';
import LoginForm from '../Forms/Login';
import RegisterForm from '../Forms/Register';
import BottomSpacer from '../BottomSpacer';

export default function LoginSection(props){
	let [loginOrRegister, setLoginOrRegister] = React.useState('login')
	let [title, setTitle] = React.useState(props.title)
	
	let toggleForm = () => {
		console.log('toggleForm');
		let newTitleText = (loginOrRegister === 'login') ? 'register' : 'login';
		setTitle(newTitleText.charAt(0).toUpperCase() + newTitleText.slice(1))
		setLoginOrRegister(newTitleText);
	}

	return (
		<section className="maxWidthWrapper">
			<Title title={title}/>
	        
	        {loginOrRegister === 'register' ? <Para text={props.text} compClass="registerText"/> : null}
	        
	        {props.img ? props.img : null}
	        
	        {props.form ? props.form : null}
	        
	        {props.includeBeginForm ? <BeginForm /> : null}
	        
	        {loginOrRegister === 'login' ? <LoginForm toggleForm={toggleForm} /> : <RegisterForm toggleForm={toggleForm} />}
        	
        	{props.includeBottomSpacer ? <BottomSpacer /> : null}
	    </section>
	)
}
