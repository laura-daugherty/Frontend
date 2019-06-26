import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

//Needed Component Imports
import Item from "./Item"
import Notifications from './Notifications';
import UpdateForm from './UpdateForm';

// Needed Action Imports
import { fetchItems, updateItem } from "../actions";

class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      activeItem: null
    }
  }

  render() {
    return (
      <div>
        <Link to="/itemForm">Add new item</Link>
        <div className="notification-banner">
          <Notifications items={this.props.items}/>
        </div>

        <div className="sidebar">
          Sidebar
          {/* Display <Sidebar> element here */}
        </div>

        {this.state.activeItem && (
          <UpdateForm  updateItem={this.updateItem} activeItem={this.state.activeItem}/>
        )}

        <div className="items-wrapper">
          {this.props.fetchingItems && <div className="loader">Loading...</div>}
          {this.props.items.length === 0 && <div>No item in the inventory</div>}
          {this.props.items.length > 0 && this.props.items.map(item => 
          <Item setUpdateForm={this.setUpdateForm} history={this.props.history} item={item} key={item.itemid}/>)}
        </div>

      </div>

    )
  }

  componentDidMount() {
    console.log("CDM", this.props.history)
    let username = localStorage.getItem('username');
    this.props.fetchItems(username);
  }

  updateItem = (e, item) => {
    e.preventDefault();
    console.log(updateItem)
    console.log(this.state)
    this.setState({
      activeItem: null,
    })
    this.props.updateItem(item);
  }

  //SET UPDATE FORM
  setUpdateForm = (e, item) => {
    e.preventDefault();
    console.log("thisItem", this.props.item)
    this.setState({ 
      activeItem: item
    }, () => {
      console.log("new state", this.state)
      // console.log("props", this.props)
      // this.props.history.push("/UpdateForm")
    })
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
    fetchItems, updateItem
  }
)(ItemList);