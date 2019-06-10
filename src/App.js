import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, NavLinkProps } from 'react-router-dom';
import SignUpForm from './logins/SignUpForm';
import SignInForm from './logins/SignInForm';
import ResetLoginForm from './logins/ResetLogin';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="App-header">
						<div className="loginCont">
							<div className="tabSwitcher">
								<NavLink exact to="/" className="tabSwitcherItem" activeClassName="tabActive">
									Sign in
								</NavLink>
								<NavLink to="/sign-up" className="tabSwitcherItem" activeClassName="tabActive">
									Sign up
								</NavLink>
								<NavLink to="/reset" className="tabSwitcherItem" activeClassName="tabActive">
									Reset
								</NavLink>
							</div>
							<div className="content">
								<Route exact path="/" component={SignInForm} />
								<Route path="/sign-up" component={SignUpForm} />
								<Route path="/reset" component={ResetLoginForm} />
							</div>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
