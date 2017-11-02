import React from 'react';
import './Section.css';
import Title from './Title';
import Para from './Para';
import Ul from './ul';
import BeginForm from './BeginForm';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class Section extends React.Component {
	constructor(props){
		super(props);
		this.title = props.title;
	};

	//add key/val to state PRE-Component-loading
	componentWillMount(){
		this.setState({loginOrRegister : 'login'});
	}
	
	render(){
		let toggleForm = () => {
			let loginOrRegister = (this.state.loginOrRegister === 'login') ? 'register' : 'login';
			this.title = loginOrRegister.charAt(0).toUpperCase() + loginOrRegister.slice(1);
			this.setState({loginOrRegister});
		}
		return (
			<section>
				<Title title={this.title}/>
		        <Para text={this.props.text}/>
		        {this.props.img}
		        {this.props.speechPicker ? <Ul list={this.props.speechesArray} /> : ''}
		        {this.props.form ? this.props.form : ''}
		        {this.props.includeBeginForm ? <BeginForm /> : ''}
		        {this.state.loginOrRegister === 'login' ? <LoginForm toggleForm={toggleForm} /> : <RegisterForm toggleForm={toggleForm} />}
		    </section>
		)
	};
}
