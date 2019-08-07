import type {PropsTypes} from './flow';
import React from 'react';
import './Section.css';
import Title from '../Title';
import Para from '../Para';
import UlLinks from '../ulLinks';
import BottomSpacer from '../BottomSpacer';
import BeginForm from '../Forms/Begin';
import LogoutForm from '../Forms/Logout';
import RequestForm from '../Forms/Request';

export default function Section ({title, 
	img, 
	text, 
	speechPicker, 
	speechesFromAPI, 
	form, 
	includeBeginForm,
	includeRequestForm,
	requested,
	includeLogoutForm,
	includeBottomSpace
}: PropsTypes) {

	return (
		<section>
			<Title title={title}/>
	        {img ? img : null}
	        <Para text={text} compClass="p"/>
	        {speechPicker ? <UlLinks speechParts={speechesFromAPI} /> : null}
	        {form ? form : null}
	        {includeBeginForm ? <BeginForm /> : null}
	        {includeRequestForm 
     			? requested === true
            		?   <div>Submitted! THANKS </div>
            		: <RequestForm /> 
     			: null
     		}
	        {includeLogoutForm ? <LogoutForm /> : null}
	        {includeBottomSpace ? <BottomSpacer /> : null}
	    </section>
	)

}