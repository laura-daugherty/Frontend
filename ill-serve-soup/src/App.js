import React from 'react';
import { BrowserRouter as Router, Rout, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header>I'll serve soup</header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { logout })(App);
