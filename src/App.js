import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {

	render() {
	  return (
	    <BrowserRouter>
	      <div>
	        <Route exact path="/" component={Login} />
	        <Route path="/dashboard/:userID" component={Dashboard} />
	      </div>
	    </BrowserRouter>
	  );
	};
}

export default App;