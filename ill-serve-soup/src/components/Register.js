//Didn't do much here - just copied over Login Form and changed names to register instead of Login

import React from "react";
import { connect } from "react-redux";

import { register } from "../actions";

class Register extends React.Component {
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
            <div className="login-button" onClick={this.register}>

              {/* Not sure if we still need this */}

              {/* {this.props.loggingIn === true ? (
                <div>
                  PROCESSING
                </div>
              ) : (
                <h3>GO</h3>
              )} */}

            </div>
          </div>
        </form>
      </div>
    );
  }



componentDidMount() {
  if (this.props.token) {
    this.props.history.push("/register");
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

register = () => {
  this.props
    .login({
      username: this.state.username,
      password: this.state.password
    })
    .then(() => {
      this.props.history.push("/itemList");
    });
};
}

const mapStateToProps = ({ token, /*loggingIn*/, error }) => ({
  token,
  // loggingIn,
  error
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
