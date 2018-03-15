import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.state.username
    const password = this.state.password

    if (username === this.state.user.username && password === this.state.user.password) {
      const userID = this.state.user._id
      this.context.router.history.push(`/dashboard/${userID}`)
    } else {
      alert('wrong password')
    }

  }

  handleChange = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value

    this.setState({
      [fieldName]: fieldValue
    })
  }

  constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          user: {
            firstName: 'Jasme',
            lastName: 'Smith',
            email: 'asdsada@asdasd.com',
            username: 'test',
            password: 'test1234',
            _id: '5a9f439eb957302ff4229ada'
          }
        }
  }

  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 login-page">
            <article className="block login-block">
              <form onSubmit={this.handleSubmit}>
                <label>
                  <p>Username:</p>
                  <input onChange={this.handleChange} type="text" name="username" required />
                </label>
                <label>
                  <p>Password:</p>
                  <input onChange={this.handleChange} type="password" name="password" required />
                </label>
                <div className="buttonGroup">
                  <button className="button primary" type="submit">Login</button>
                  <button className="button" type="button">Create an Account</button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
