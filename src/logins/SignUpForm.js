import React, { Component } from 'react';

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			emailUp: '',
			passWrdUp: '',
			passWrdUp1: '',
			isvalidForm: true,
			dataList: [],
			formErrors: {
				emailUp: '',
				passWrdUp: '',
				passWrdUp1: ''
			}
		};

		this.handleEmail = this.handleEmail.bind(this);
		this.handlePw = this.handlePw.bind(this);
		this.handlePw1 = this.handlePw1.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmail(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handlePw(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handlePw1(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	matchPws(evt) {
		evt.preventDefault();
		let v1 = document.getElementById('passWrdUp').value;
		let v2 = document.getElementById('passWrdUp1').value;
		console.log('OUT: passWrdUp: ' + v1 + ', passWrdUp1: ' + v2);
		if (v1 !== v2) {
			console.log('Mismatch');
			document.getElementById('passWrdUp1').setAttribute('invalid', true);
			document.getElementById('passWrdUp1').value = '';
		}
	}

	invalidMatch(evt) {
		alert('Invalid');
	}

	handleSubmit(evt) {
		evt.preventDefault();
		console.log(
			'Submit: ' +
				this.state.emailUp +
				', passWrdUp: ' +
				this.state.passWrdUp +
				', passWrdUp1: ' +
				this.state.passWrdUp1
		);
	}

	render() {
		let { emailUp, passWrdUp, passWrdUp1, isvalidForm, dataList } = this.state;
		return (
			<div className="formContent">
				<form name="signUpForm" className="FormFields" onSubmit={this.handleSubmit}>
					<div className="FormField">
						<input
							type="email"
							id="emailUp"
							name="emailUp"
							className="formInput"
							placeholder="Email"
							value={this.state.emailUp}
							onChange={this.handleEmail}
							required
						/>
					</div>
					<div className="FormField">
						<input
							type="password"
							id="passWrdUp"
							name="passWrdUp"
							className="formInput"
							placeholder="Password"
							value={this.state.passWrdUp}
							onChange={this.handlePw}
							required
						/>
					</div>
					<div className="FormField">
						<input
							type="text"
							id="passWrdUp1"
							name="passWrdUp1"
							className="formInput"
							placeholder="Repeat Password"
							value={this.state.passWrdUp1}
							onChange={this.handlePw1}
							onBlur={this.matchPws}
							required
						/>
					</div>
					<div className="FormField">
						<button type="submit" id="signUpBtn" name="signUpBtn" className="formInput">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUpForm;
