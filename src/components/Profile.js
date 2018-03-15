import React, { Component } from 'react';
import Dashboard from './Dashboard.js'


class Profile extends Component {



	render() {
		return (
			<section>
			  <div className="block">
			  	<h3>Hello, {this.props.user.firstName} {this.props.user.lastName}</h3>
			  	<p>Hope you will enjoy using this notes taking app.</p>
	      	  </div>
	      	  <div className="block text-center">
			  	<img src={this.props.user.image} width="100" alt={this.props.user.alt} />
			  	<h4>{this.props.user.firstName} {this.props.user.lastName}</h4>
			  	<div className="buttonGroup">
			  		<button className="button">LOG OUT</button>
			  	</div>
	      	  </div>
	      	</section>
      	)
      	
	}

}

export default Profile