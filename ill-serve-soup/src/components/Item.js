import React from "react";
import { connect } from "react-redux";

// Needed Action Imports
import { deleteItem, setActive } from "../actions"


class Item extends React.Component {

  render() {
    return (
      <div className="item-card">
        <div className="card-body">
          <h2>{this.props.item.itemname[0].toUpperCase() + this.props.item.itemname.slice(1).toLowerCase()}</h2>
          <div>{this.props.item.itemquantity + ' ' + this.props.item.itemunit.toLowerCase()}</div>
          <div className='item-category'>{this.props.item.itemcategory.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}</div>
        </div>
        <div className='item-btn'>
          <button onClick={(e) => this.deleteItem(e, this.props.item.itemid)}>Delete</button>
          <button onClick={(e) => this.setUpdateForm(e, this.props.item)}>Update</button>
        </div>
      </div>
    );
  }

  deleteItem = (e, itemid) => {
    e.preventDefault();
    this.props.deleteItem(itemid)
  }

  setUpdateForm = (e, item) => {
    e.preventDefault();
    this.props.setActive(item)
    this.props.history.push('/itemForm')
  }
}


const mapStateToProps = state => {
  return {
    error: state.error,
    deletingItem: state.deletingItem
  }
};

export default connect(
mapStateToProps,
{
  deleteItem, setActive
}
)(Item);
