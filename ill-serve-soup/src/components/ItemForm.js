import React from "react";
import { connect } from "react-redux";

import { addItem, updateItem } from "../actions";

class ItemForm extends React.Component {
  state = {
      itemname: '',
      itemquantity: '',
      itemunit: '',
      itemthreshold: '',
      itemcategory: ''
  };
  render() {
    return (
      <form className="item-form">
        <div>
          <input
            placeholder="Item Name"
            name="itemname"
            value={this.state.itemname}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder="Item Category"
            name="itemcategory"
            value={this.state.itemcategory}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder="Item Quantity"
            name="itemquantity"
            value={this.state.itemquantity}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder="Item Unit"
            name="itemunit"
            value={this.state.itemunit}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder="Low Stock Threshold"
            name="itemthreshold"
            value={this.state.itemthreshold}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <div onClick={this.addItem}>
            <h3>Add Your Item</h3>
          </div>
          <div onClick={this.updateItem}>
            <h3>Update Your Item</h3>
          </div>
        </div>
      </form>
    )
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value

      //Parse to number if Num value
    });
  };

  addItem = e => {
    e.preventDefault();
    console.log("ItemName", this.state.itemname)
    const newItem = {
      itemname: this.state.itemname,
      itemquantity: this.state.itemquantity,
      itemunit: this.state.itemunit,
      itemthreshold: this.state.itemthreshold,
      itemcategory: this.state.itemcategory
    };
    this.props.addItem(newItem);
    console.log("newItem", newItem)
  };
}

//UPDATE ITEM EVENT GOES HERE

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(
  mapStateToProps,
  {
    addItem,
    updateItem
  }
)(ItemForm);
