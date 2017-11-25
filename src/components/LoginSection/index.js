import React from 'react';
import './LoginSection.css';
import Title from '../Title';
import Para from '../Para';
import BeginForm from '../Forms/Begin';
import LoginForm from '../Forms/Login';
import RegisterForm from '../Forms/Register';
import BottomSpacer from '../BottomSpacer';

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
			<section className="loginRegisterWrapper">
				<Title title={this.title}/>
		        {this.state.loginOrRegister === 'register' ? <Para text={this.props.text} compClass="registerText"/> : null}
		        {this.props.img ? this.props.img : null}
		        {this.props.form ? this.props.form : null}
		        {this.props.includeBeginForm ? <BeginForm /> : null}
		        {this.state.loginOrRegister === 'login' ? <LoginForm toggleForm={toggleForm} /> : <RegisterForm toggleForm={toggleForm} />}
	        	{this.props.includeBottomSpacer ? <BottomSpacer /> : null}
		    </section>
		)
	};
}
