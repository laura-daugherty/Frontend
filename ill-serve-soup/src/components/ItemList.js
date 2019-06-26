import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//Needed Component Imports
import Item from "./Item"
import Notifications from './Notifications';

// Needed Action Imports
import { fetchItems } from "../actions";

class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div>

      <nav>
        <div>LOGO</div>
        <Link to="/itemForm">Add new item</Link>
      </nav>
        {/* Conditional Rendering - if @ certain path, display element */}
      <div className="notification-banner">
        {/* Display <Notification> element here */}
        <Notifications items={this.props.items}/>
      </div>

      <div className="sidebar">
        Sidebar
        {/* Display <Sidebar> element here */}
      </div>
      <Link to='/ItemForm'/>
      <div className="items-wrapper">
        {this.props.fetchingItems & <div className="loader">Loading...</div>}
        {this.props.items.length === 0 && <div>No item in the inventory</div>}
        {this.props.items.length > 0 && this.props.items.map(item => <Item item={item} key={item.itemid}/>)}
      </div>
      </div>

    )
  }

  componentDidMount() {
    // console.log("CDM", this.props)
    let username = localStorage.getItem('username');
    this.props.fetchItems(username);
  }
}

const mapStateToProps = state => ({
  items: state.items,
  fetchingItems: state.fetchingItems,
  error: state.error,
});

export default connect(
  mapStateToProps,
  {
    fetchItems,
  }
)(ItemList);