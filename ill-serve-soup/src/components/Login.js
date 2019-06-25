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
    console.log("loginFormProps", this.props)
    return (
      <div className="login-wrapper">
        <form>
          <img src="" alt="Logo" />
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
            {
                this.props.error ?  
                <div>
                  NO GOOD
                </div>
                :
                <div></div>
              }
          </div>
          <div>
            <div className="login-button" onClick={this.login}>
              {this.props.loggingIn === true ? (
                <div>
                  PROCESSING
                </div>
              ) : (
                <h3>GO</h3>
              )}
            </div>
            <i className="fas fa-sign-in-alt" />
          </div>
        </form>
        <div className="login-splash" />
      </div>
    );
  }

  componentDidMount() {
    if (this.props.token) {
      this.props.history.push("/itemList");
    }
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
    console.log("loginFunctionProps", this.props)
    this.props
      .login({
        username: this.state.creds.username,
        password: this.state.creds.password
      })
      // .then(() => {
      //   this.props.history.push("/itemList");
      // });
  };
}

const mapStateToProps = ({ token, loggingIn, error }) => ({
  token,
  loggingIn,
  error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
