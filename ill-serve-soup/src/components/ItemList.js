import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

//Needed Component Imports
import Item from "./Item"
import Notifications from './Notifications';
import SideMenu from './SideMenu';
//import UpdateForm from './UpdateForm';

// Needed Action Imports
import { fetchItems, updateItem, setFilter } from "../actions";

class ItemList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: ['all', 'produce', 'meat', 'fish', 'dairy', 'spices', 'bar', 'canned_goods', 'dry_goods', 'supplies', 'miscellaneous']
    }
  }

  render() {
    let displayItems;
    if (this.props.searchCategory === 'all') {
      displayItems = this.props.items;
    } else {
      displayItems = this.props.items.filter(item => item.itemcategory === this.props.searchCategory)
    }
    return (
      <div>
        <div className="notification-banner">
          <Notifications items={this.props.items}/>
        </div>

        {/* 
        {this.state.activeItem && (
          <UpdateForm  updateItem={this.updateItem} activeItem={this.state.activeItem}/>
        )}
        */}
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
  
  /*
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
  */
}

const mapStateToProps = (state) => ({
  items: state.items,
  fetchingItems: state.fetchingItems,
  error: state.error,
  searchCategory: state.searchCategory
})

export default connect(
  mapStateToProps,
  {
    fetchItems, updateItem, setFilter
  }
)(ItemList);