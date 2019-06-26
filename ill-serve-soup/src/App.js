import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Login from "./components/Login";
import ItemList from "./components/ItemList";
import ItemForm from './components/ItemForm';
import Register from './components/Register';
import Home from './components/Home'
import PrivateRoute from './utilities/PrivateRoute';

//Style Stuff
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    console.log("in constructor")
  }
  
  render() {
    return (
      <div className="App">

        {/* //Routes// */}

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/itemList" component={ItemList} />
        <PrivateRoute exact path="/ItemForm" component={ItemForm} />

      </div>
    );
  }
}

export default App


