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
    this.props.history.push("/login");
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
  this.props
    .login({
      username: this.state.username,
      password: this.state.password
    })
    .then(() => {
      this.props.history.push("/home");
    });
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