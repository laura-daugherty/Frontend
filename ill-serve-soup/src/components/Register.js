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
      <div className="login-bg">
      <div className="login-wrapper">
        {this.props.error ? 
          <div className="axios-error">
            Error Signing Up
          </div> 
          : 
          <div className="axios-alert">
            Enter Your Information
          </div>}
        <div className="form-button-wrapper">

        <form  className="login-form">
        <div className="input-wrapper">
          <div className="input-holder">
            <input
              placeholder="username"
              name="username"
              value={this.state.creds.username}
              onChange={this.handleChanges}
              required
            />
          </div>
          <div className="input-holder">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.creds.password}
              onChange={this.handleChanges}
              required
            />
          </div>
        

            {/* {this.props.error && <div>NO GOOD</div>} */}
          </div>
          <div className="login-button-wrap">
            <button className="login-button" onClick={this.register}>

              {/* Not sure if we still need this  */}
              {this.props.registering || this.props.loggingIn 
                ? <div>
                    Building Your Kitchen...
                  </div> : 
                  <>Sign Up</>}
            </button>
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

  register = () => {
    //adding this.props.history as param so action creator will redirect after user is registered
    this.props.register(this.props.history, {
        username: this.state.creds.username,
        password: this.state.creds.password
      })
    
      // .then(() => {
      //   this.props.history.push("/itemList");
      // });
  };
}

const mapStateToProps = ({ registering, loggingIn, error }) => ({
  registering,
  loggingIn,
  error
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
