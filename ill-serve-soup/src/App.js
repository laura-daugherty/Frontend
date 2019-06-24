import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Login from "./components/Login";
import ItemList from "./components/ItemList";
import ItemForm from './components/ItemForm';
import UpdateItemForm from './components/UpdateItemForm'
// import PrivateRoute from './components/PrivateRoute';

//Style Stuff
import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <nav>
          <div>LOGO</div>
        </nav>

        <div className="notification-banner">
          {/* Display <Notification> element here */}
          This stuff is Low
        </div>

        <div className="sidebar">
          {/* Display <Sidebar> element here */}
        </div>

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        {/* //Routes// */}

        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/itemList" component={ItemList} />
        <Route exact path="/ItemForm" component={ItemForm} />
        <Route exact path="/updateItemForm" component={UpdateItemForm} />

      </div>
    );
  }
}

export default App