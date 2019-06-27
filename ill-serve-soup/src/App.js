import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './actions';

// Components
import Login from "./components/Login";
import ItemList from "./components/ItemList";
import ItemForm from './components/ItemForm';
import Register from './components/Register';
import Home from './components/Home';
import PrivateRoute from './utilities/PrivateRoute';
import logo from './images/logo.png';
import profile from './images/Laura.png';

//Style Stuff
import './App.scss';

class App extends React.Component {

  logout = (event) => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/')
    localStorage.clear();
  }
  
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <div className="logo">
            <img src={logo} alt="Serve Soup Logo"/>
            <h1>
              I'll Serve Soup
            </h1>
          </div>
          {this.props.isLoggedIn && 
            <div className='profile'>
              <div onClick={this.logout}>Logout</div>  
              <img src={profile} alt='profile icon' />
            </div>}
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/itemList" component={ItemList} />
        <PrivateRoute exact path="/ItemForm" component={ItemForm} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { logout })(App);


