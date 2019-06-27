import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
      <div className="login-bg">
        <div className="home-button-wrapper">
          <div className="home-login-button">
            <Link className="Link" to="/login">Login</Link>
          </div>
          <div className="home-login-button">
            <Link className="Link" to="/register">Register</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home