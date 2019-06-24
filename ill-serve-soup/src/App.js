import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from "./components/Login";

// import PrivateRoute from './components/PrivateRoute';
import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <nav>
          <div>LOGO</div>
          <div>LogOut</div>
        </nav>
        <Link to="/login">Login</Link>
        <Link to="/Register">Register</Link>
        {/* <Route exact path="/login" component={Register} /> */}
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { })(App);
