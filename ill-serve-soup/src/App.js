import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from "./components/Login";

// import PrivateRoute from './components/PrivateRoute';
import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <nav>
          <image>LOGO</image>
          <NavLink>LogOut</NavLink>
        </nav>
        <Route exact path="/" component={Login} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { })(App);
