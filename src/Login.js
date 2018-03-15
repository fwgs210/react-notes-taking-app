import React, { Component } from 'react';

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    if (true) {}

  }


  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form onSubmit={this.handleSubmit}>
              <label>
                <p>Username:</p>
                <input type="text" name="name" required />
              </label>
              <label>
                <p>Password:</p>
                <input type="text" name="name" required />
              </label>
              <div>
                <button type="submit">Login</button>
                <button type="button">Create an Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
