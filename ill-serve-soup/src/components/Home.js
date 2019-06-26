import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
      <div className="home-bg">
        <div className="log-container">
          <Link className="log-button" to="/login">Login</Link>
          <Link className="log-button" to="/register">Register</Link>
        </div>
      </div>
    )
  }
}

export default Home