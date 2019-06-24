import React from "react";
import { connect } from "react-redux";

import { updateItem } from "../actions";

//Really not sure about this one - I copied over the ItemForm and udpated it how I think it should be

class UpdateItemForm extends React.Component {
  state = {
    //How do we get the UpdateItemForm state to persist from previous State??
    name: this.state.name,
    quantity: this.state.quantity,
    unit: this.state.unit,
    threshold: this.state.threshold,
    category: this.state.category
  };
  render() {
    return (
      <form className="item-form">
        <div>
          <input
          //Is this how I get placeholder to say what the name of currently selected item is?
            placeholder={this.state.name}
            name="name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder={this.state.category}
            name="category"
            value={this.state.category}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder={this.state.quantity}
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder={this.state.unit}
            name="unit"
            value={this.state.unit}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <input
            placeholder={this.state.threshold}
            name="threshold"
            value={this.state.threshold}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <button onClick={this.updateItem}>
            <h3>Update Your Item</h3>
          </button>
        </div>
      </form>
    )
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateItem = e => {
    e.preventDefault();
    const updatedItem = {
      name: this.state.name,
      quantity: this.state.quantity,
      unit: this.state.unit,
      threshold: this.state.threshold,
      category: this.state.category
    };
    this.props.updateItem(updatedItem);
  };
}

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(
  mapStateToProps,
  {
    updateItem
  }
)(UpdateItemForm);
