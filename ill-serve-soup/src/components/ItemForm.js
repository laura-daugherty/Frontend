import React from "react";
import { connect } from "react-redux";

import { addItem, updateItem } from "../actions";

class ItemForm extends React.Component {
  state = {
    name: '',
    quantity: '',
    unit: '',
    threshold: '',
    category: ''
  };
  render() {
    return (
      <form className="item-form">
        <div>
          <input
            placeholder="Item Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder="Item Category"
            name="category"
            value={this.state.category}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder="Item Quantity"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder="Item Unit"
            name="unit"
            value={this.state.unit}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder="Low Stock Threshold"
            name="threshold"
            value={this.state.threshold}
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
    const newItem = {
      name: this.state.name,
      quantity: this.state.quantity,
      unit: this.state.unit,
      threshold: this.state.threshold,
      category: this.state.category
    };
    this.props.addItem(newItem);
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
