import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
      <div className="login-bg">
        <div className="home-button-wrapper">
          <div>
            <Link className="home-login-button" to="/login">Login</Link>
          </div>
          <div>
            <Link className="home-login-button" to="/register">Register</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home