import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Needed Action Imports
import { deleteItem } from "../actions"

import UpdateForm from './UpdateForm'


class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: null
    }
  }

  render() {
    return (
      <div className="item-card">
        <div className="card-body">
          <h1>{this.props.item.itemname}</h1>
          <p>{this.props.item.itemquanity}</p>
          <p>{this.props.item.itemcategory}</p>
          <h3>{this.props.item.itemunit}</h3>
          <h3>{this.props.item.itemthreshold}</h3> 
        </div>
        <button onClick={(e) => this.deleteItem(e, this.props.item.itemid)}>Delete</button>
        <button onClick={this.setUpdateForm}>Update</button>
        {this.state.activeItem && (
          <UpdateForm  activeItem={this.state.activeItem}/>
        )}
      </div>
    );
  }

  deleteItem = (e, item) => {
    e.preventDefault();
    this.props.deleteItem(item)
  }

  //SET UPDATE FORM
  setUpdateForm = (e) => {
    e.preventDefault();
    console.log("thisItem", this.props.item)
    this.setState({ 
      activeItem: this.props.item 
    }, () => {
      console.log("new state", this.state)
      // console.log("props", this.props)
      // this.props.history.push("/UpdateForm")
    })
  }
}


const mapStateToProps = state => {
  return {
    items: state.items,
    activeItem: state.activeItem
  }
};

export default connect(
mapStateToProps,
{
  deleteItem,
}
)(Item);
