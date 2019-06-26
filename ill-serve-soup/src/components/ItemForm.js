import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addItem } from "../actions";

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
      <div> 
        <Link to='/itemList'>Back to inventory</Link>
        <form className="item-form">
          <div>
            <input
              type='text'
              placeholder="Item Name"
              name="itemname"
              value={this.state.itemname}
              onChange={this.handleChanges}
              required
            />
          </div>
          <div>
            <select name='itemcategory' value={this.state.itemcategory} onChange={this.handleChanges} required>
              <option value='' disabled>Item Category</option>
              <option value='dryGoods'>Dry Goods</option>
              <option value='produce'>Produce</option>
              <option value='meat'>Meat</option>
              <option value='dairy'>Dairy</option>
              <option value='miscellaneous'>Miscellaneous</option>
            </select>
          </div>
          {/* 
          <div>
            <input
              type='text'
              placeholder="Item Category"
              name="itemcategory"
              value={this.state.itemcategory}
              onChange={this.handleChanges}
              required
            />
          </div>
          */}
          <div>
            <input
              type='number'
              placeholder="Item Quantity"
              name="itemquantity"
              value={this.state.itemquantity}
              onChange={this.handleChanges}
              required
            />
          </div>
          <div>
            <input
              type='text'
              placeholder="Item Unit"
              name="itemunit"
              value={this.state.itemunit}
              onChange={this.handleChanges}
            />
          </div>
          <div>
            <input
              type='number'
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

          </div>
        </form>
      </div>
    )
  }

  handleChanges = e => {
    e.preventDefault();
    let value = e.target.value
    if (e.target.name === "itemquantity") {
      value = parseInt(value)
    }
    if (e.target.name === "itemthreshold") {
      value = parseInt(value)
    }
    this.setState({
      [e.target.name]: value
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
    console.log("newItem", newItem)
    this.props.addItem(newItem);
    //reset form after item was added
    this.setState({
      itemname: '',
      itemquantity: '',
      itemunit: '',
      itemthreshold: '',
      itemcategory: ''
    })
  };
}



const mapStateToProps = state => ({
  items: state.items,
  activeItem: state.activeItem
});

export default connect(
  mapStateToProps,
  {
    addItem,
  }
)(ItemForm);
