import React from 'react';
import { BrowserRouter as Router, Rout, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className='Add-header'>
          <h2>Logo</h2>
          <div>Container for Links</div>
        </header>
        <div className='App-content'>
          {/* will have route for Login, Register, ItemList, ItemForm, Notifications, etc*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { })(App);
