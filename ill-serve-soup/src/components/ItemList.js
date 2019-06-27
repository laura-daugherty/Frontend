import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import Item from "./Item"
import Notifications from './Notifications';
import SideMenu from './SideMenu';

import { fetchItems, updateItem, setFilter, searchByName } from "../actions";

class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: ['all', 'produce', 'meat', 'fish', 'dairy', 'spices', 'bar', 'canned_goods', 'dry_goods', 'supplies', 'miscellaneous']
    }
  }

  render() {
    let displayItems;
    if (this.props.searchName) {
      console.log(this.props.searchName)
      displayItems = this.props.items.filter(item => item.itemname === this.props.searchName)
    } else {
      if (this.props.searchCategory === 'all') {
        displayItems = this.props.items;
      } else {
        displayItems = this.props.items.filter(item => item.itemcategory === this.props.searchCategory)
      }
    }
    return (
      <div>
        <div className="notification-banner">
          <Notifications searchByName={this.searchByName} items={this.props.items}/>
        </div>
        <div className="menu-item-wrap">
          <div className="sideMenu-wrap">
            <SideMenu searchCategory={this.props.searchCategory} setFilter={this.setFilter} categories={this.state.categories}/>
          </div>
          <div className="items-wrapper">
          <div className="add-link-div">
            <Link className="Link" to='/itemForm'>+</Link>
          </div>
            {this.props.fetchingItems && <div className="loader">Checking Pantry...</div>}
            {this.props.items.length === 0 && <div className="no-items">Your Pantry is empty! Add an item to get started.</div>} 
            {displayItems.length > 0 && displayItems.map(item => 
              <Item history={this.props.history} item={item} key={item.itemid}/>)}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    console.log("CDM", this.props.history)
    let username = localStorage.getItem('username');
    this.props.fetchItems(username);
  }

  setFilter = (event, item) => {
    event.preventDefault();
    this.props.setFilter(item);
  }

  searchByName = (event, name) => {
    event.preventDefault();
    this.props.searchByName(name)
  }

}

const mapStateToProps = (state) => ({
  items: state.items,
  fetchingItems: state.fetchingItems,
  error: state.error,
  searchCategory: state.searchCategory,
  searchName: state.searchName
})

export default connect(
  mapStateToProps,
  {
    fetchItems, updateItem, setFilter, searchByName
  }
)(ItemList);