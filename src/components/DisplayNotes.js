import React, { Component } from 'react';
import Dashboard from './Dashboard.js'


class DisplayNotes extends Component {



	render() {
		return (
		  <div>
		      {this.props.allNotes.map((each, key) => {
		              return (
		                <article className="block" key={key}>
		                	<h2>{each.subject}</h2>
		                	<div dangerouslySetInnerHTML={{__html:each.notes}} />
		                </article>
					  )
	      	  })}
      	  </div>
      	)
      	
	}

}

export default DisplayNotes




