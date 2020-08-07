import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomeButton from '../custome-button/custome-button.component';

import './sign-in.styles.scss';

export class SignIn extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(`${this.state}`);
		this.setState({ email: '', password: '' });
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });

	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>

					<FormInput
						required
						name="email"
						label="email"
						type='email'
						value={this.state.email}
						handleChange={this.handleChange} />

					<FormInput
						required
						name="password"
						type='password'
						label='password'
						value={this.state.password}
						handleChange={this.handleChange} />

					<CustomeButton type="submit" value='Submir Form'>Sign In</CustomeButton>
				</form>
			</div>
		)
	}
}

export default SignIn;
