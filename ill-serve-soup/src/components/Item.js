import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Needed Action Imports
import { deleteItem } from "../actions"


class Item extends React.Component {
  
  render() {
    return (
      <div className="item-card">
        <div className="card-body">
          <h1>
          {/* {this.props.item.name}  */}
          "NAME"
          </h1>
          {/* <h3>{this.props.item.category}</h3>
          <h3>{this.props.item.quantity}</h3>
          <h3>{this.props.item.unit}</h3>
          <h3>{this.props.item.threshold}</h3> */}
        </div>
        <button onClick={(e) => this.deleteItem(e, this.props.item.id)}>Delete</button>
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

