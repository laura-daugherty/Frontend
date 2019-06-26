//Didn't do much here - just copied over Login Form and changed names to register instead of Login

import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

import { register } from "../actions";

class Register extends React.Component {
  state = {
  creds: {
    username: "",
    password: ""
  },
 }
  render() {
    //redirect user to itemlist if there is token in localstorage
    if (localStorage.getItem('token')) {
      return <Redirect to='/itemList' />
    }
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
            {this.props.error && <div>NO GOOD</div>}
          </div>
          <div>
            <div className="login-button" onClick={this.register}>

              {/* Not sure if we still need this  */}
              {this.props.registering || this.props.loggingIn ? <div>PROCESSING</div> : <h3>GO</h3>}
            </div>
          </div>
        </form>
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
