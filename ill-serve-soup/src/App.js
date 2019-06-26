import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from './actions';

// Components
import Login from "./components/Login";
import ItemList from "./components/ItemList";
import ItemForm from './components/ItemForm';
import UpdateForm from './components/UpdateForm'
import Register from './components/Register';
import Home from './components/Home'
import PrivateRoute from './utilities/PrivateRoute';

//Style Stuff

import './App.scss';

class App extends React.Component {

  logout = (event) => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/')
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userid');
  }
  
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <div className="logo">
            <img src="./Images/logo.png" alt="Serve Soup Logo"/>
            <img src="./src/Images/Laura.png" alt="Laura's face"/>
          </div>
          {/*profile icon? or anything to put in navbar*/}
          {this.props.isLoggedIn && <button onClick={this.logout}>Logout</button>}
        </header>

        {/* //Routes// */}

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/itemList" component={ItemList} />
        <PrivateRoute exact path="/ItemForm" component={ItemForm} />
        <PrivateRoute exact path="/UpdateForm" component={UpdateForm} />


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { logout })(App);


