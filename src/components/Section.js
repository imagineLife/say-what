import React from 'react';
import './Section.css';
import Title from './Title';
import Para from './Para';
import Ul from './ul';
import BeginForm from './BeginForm';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Section(props) {
	return (
		<section>
			<Title title={props.title}/>
	        <Para text={props.text}/>
	        {props.img}
	        {props.speechPicker ? <Ul list={props.speechesArray} /> : ''}
	        {props.form}
	        {props.includeBeginForm ? <BeginForm /> : ''}
	        {props.includesLoginForm ? <LoginForm /> : ''}
	        {props.includesRegisterForm ? <RegisterForm /> : ''}
	    </section>
	);
}
