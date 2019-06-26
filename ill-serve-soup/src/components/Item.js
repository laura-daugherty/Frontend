import React from "react";
import { connect } from "react-redux";

// Needed Action Imports
import { deleteItem } from "../actions"


class Item extends React.Component {

  render() {
    return (
      <div className="item-card">
        <div className="card-body">
          <h1>{this.props.item.itemname}</h1>
          <p>{this.props.item.itemquantity + ' ' + this.props.item.itemunit} </p>
          <p>Category: {this.props.item.itemcategory}</p>
          <h3>{this.props.item.itemthreshold}</h3> 
        </div>
        <button onClick={(e) => this.deleteItem(e, this.props.item.itemid)}>Delete</button>
        <button onClick={(e) => this.props.setUpdateForm(e, this.props.item)}>Update</button>
        
      </div>
    );
  }

  deleteItem = (e, itemid) => {
    e.preventDefault();
    this.props.deleteItem(itemid)
  }
}


const mapStateToProps = state => {
  return {
    items: state.items,
  }
};

export default connect(
mapStateToProps,
{
  deleteItem,
}
)(Item);
