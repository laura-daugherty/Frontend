import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends React.Component {
  state = {
  creds: {
    username: "",
    password: ""
  },
 }
  render() {
    return (
      <div className="login-bg">
        <div className="login-wrapper">
          {this.props.error 
            ? (
              <div className="axios-error">
                Invalid Login!
              </div> 
            ) 
            : (
              <div className="axios-alert">
                Enter Your Information
              </div>
            ) 
          }
          <div className="form-button-wrapper">
            <form className="login-form">
              <div className="input-wrapper">
                <div>
                  <input
                    placeholder="username"
                    name="username"
                    value={this.state.creds.username}
                    onChange={this.handleChanges}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.creds.password}
                    onChange={this.handleChanges}
                    required
                  />
                </div>
              </div>
              <div className="login-div" onClick={this.login}>
                {this.props.loggingIn === true ? 'Logging In...' : 'Log In'}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  login = () => {
    this.props
      .login({
        username: this.state.creds.username,
        password: this.state.creds.password
      }).then(() => {
        let token = localStorage.getItem('token');
        if (token) {
          this.props.history.push("/itemList");
        }
      })
  };
}

const mapStateToProps = ({ loggingIn, error }) => ({
  loggingIn,
  error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);