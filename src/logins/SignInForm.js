import React, { Component } from 'react';

class SignInForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: 'Sincere@april.biz',
			password: 'Bret',
			dataList: [],
			isLoaded: true,
			formErrors: {
				email: '',
				password: ''
			},
			dataError: null
		};

		this.handleEmail = this.handleEmail.bind(this);
		this.handlePw = this.handlePw.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmail(evt) {
		console.log(evt.target.value);
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handlePw(evt) {
		console.log(evt.target.value);
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		console.log('Submit: ' + this.state.email + ', and: ' + this.state.password);
	}

	componentDidMount() {
		let urri = 'https://jsonplaceholder.typicode.com/users';

		fetch(urri).then((res) => res.json()).then((json) => {
			console.log('Data Fetched');
			this.setState({
				isLoaded: true,
				dataList: json
			});
		});
	}

	render() {
		const { email, password, dataList, dataError, isLoaded, formErrors } = this.state;
		return (
			<div className="formContent">
				<form name="signInForm" className="FormFields" onSubmit={this.handleSubmit}>
					<div className="FormField">
						<input
							type="email"
							id="email"
							name="email"
							className="formInput"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleEmail}
							required
						/>
					</div>
					<div className="FormField">
						<input
							type="password"
							id="password"
							name="password"
							className="formInput"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handlePw}
							required
						/>
					</div>
					<div className="FormField">
						<button type="submit" id="signInBtn" name="signInBtn" className="formInput">
							Sign In
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignInForm;
