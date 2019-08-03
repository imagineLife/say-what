import type { PropsTypes} from './flow'
import React from 'react';
import './LoginSection.css';
import Title from '../Title';
import Para from '../Para';
import BeginForm from '../Forms/Begin';
import LoginForm from '../Forms/Login';
import RegisterForm from '../Forms/Register';
import BottomSpacer from '../BottomSpacer';

export default function LoginSection({
	title, 
	text, 
	img,
	form, 
	includeBeginForm,
	includeBottomSpacer}: PropsTypes){
	let [loginOrRegister, setLoginOrRegister] = React.useState('login')
	let [thisTitle, setThisTitle] = React.useState(title)
	
	let toggleForm = () => {
		let newTitleText = (loginOrRegister === 'login') ? 'register' : 'login';
		setThisTitle(newTitleText.charAt(0).toUpperCase() + newTitleText.slice(1))
		setLoginOrRegister(newTitleText);
	}

	return (
		<section className="maxWidthWrapper">
			<Title title={thisTitle}/>
	        
	        {loginOrRegister === 'register' ? <Para text={text} compClass="registerText"/> : null}
	        
	        {img ? img : null}
	        
	        {form ? form : null}
	        
	        {includeBeginForm ? <BeginForm /> : null}
	        
	        {loginOrRegister === 'login' ? <LoginForm toggleForm={toggleForm} /> : <RegisterForm toggleForm={toggleForm} />}
        	
        	{includeBottomSpacer ? <BottomSpacer /> : null}
	    </section>
	)
}
