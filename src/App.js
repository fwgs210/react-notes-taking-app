import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Router,Redirect, Switch } from 'react-router-dom';


class App extends React.Component {

	state = {
		user: null
	}

	setUser = user => {
		this.setState({user: user})
	}

	getCurrentUser = () => {
		
	}

	render() {
	  return (
	    <BrowserRouter>
	      <div>
	        <Route exact 
	        		path="/login" 
	        		render={() => {
	        			if (this.state.user) {
	        				return <Redirect to="/" />
	        			} else {
	        				return <Login setUser={this.setUser} />
	        			}
	        		}} />
	        <Route path="/" 
	        		render={() => {
	        			if (this.state.user) {
	        				return <Dashboard user={this.state.user} />
	        			} else {
	        				return <Redirect to="/login" setUser={this.setUser} />
	        			}
	        			
	        }} />
	      </div>
	    </BrowserRouter>
	  );
	};
}

export default App;