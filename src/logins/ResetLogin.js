import React, { Component } from 'react';

class ResetLoginForm extends Component {
	constructor() {
		super();

		this.state = {
			email: ''
		};

		this.handleEmail = this.handleEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmail(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit() {}

	render() {
		return (
			<div className="formContent">
				<form name="resettForm" className="FormFields" onSubmit={this.handleSubmit}>
					<div className="FormField">
						<input
							type="email"
							id="emailRes"
							name="emailRes"
							className="formInput"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleEmail}
						/>
					</div>
					<div className="FormField">
						<button type="submit" id="resetBtn" name="resetBtn" className="formInput">
							Reset password
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default ResetLoginForm;
