import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Needed Action Imports
import { deleteItem } from "../actions"


class Item extends React.Component {
  // state = {
  //   items: {
  //     activeItem:
  //   }
  // }
  
  render() {
    return (
      <div className="item-card">
        <div className="card-body">
          <h1>{this.props.item.itemname}</h1>
          <p>{this.props.item.itemquanity}</p>
          <p>{this.props.item.itemcategory}</p>
          
          {/* modified code based on backend data structure
          <h3>{this.props.item.itemcategory}</h3>
          <h3>{this.props.item.itemquantity}</h3>
          <h3>{this.props.item.itemunit}</h3>
          <h3>{this.props.item.itemthreshold}</h3> */}
        </div>
        <button onClick={(e) => this.deleteItem(e, this.props.item.itemid)}>Delete</button>
        <Link to="/itemForm" onClick={this.setUpdateForm}>Update</Link>
      </div>
    );
  }

  deleteItem = (e, item) => {
    e.preventDefault();
    this.props.deleteItem(item)
  }

  //SET UPDATE FORM

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
