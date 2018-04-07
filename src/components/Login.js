import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Login extends Component {

  constructor() {
        super();
        this.state = {
          username: '',
          password: ''
        }
  }  

  // static contextTypes = {
  //   router: PropTypes.object.isRequired
  // }


  // findUser = (user, password, data) => {
  //   for (var i = 0; i <= data.length; i++) {
  //     if (user === data[i].username && password === data[i].password) {
  //       this.props.setUser(data[i])
  //     } else {
  //       alert('Please enter the correct username and password')
  //     }
  //   }
  // }

  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.state.username
    const password = this.state.password

    const users = [
        {
                firstName: 'Jasme',
                lastName: 'Smith',
                email: 'asdsada@asdasd.com',
                username: 'test',
                password: 'test1234',
                _id: '5a9f439eb957302ff4229ada',
                notes: ['dsfdsfds']
        },
        {
                firstName: 'test 1',
                lastName: 'test 2',
                email: 'test1@test.com',
                username: 'test1',
                password: 'test1234',
                _id: '5a9f439eb957302ff4229ada'
        }
    ]


    // axios.post('/login', {username, password})

    // this.findUser(username, password, users)
    this.props.setUser({
                firstName: 'Jasme',
                lastName: 'Smith',
                email: 'asdsada@asdasd.com',
                username: 'test',
                password: 'test1234',
                _id: '5a9f439eb957302ff4229ada',
                
        })

  }

  handleChange = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value

    this.setState({
      [fieldName]: fieldValue
    })
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
