import React from "react";
import { connect } from "react-redux";

import { addItem, updateItem } from "../actions";

class ItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemname: '',
      itemquantity: '',
      itemunit: '',
      itemthreshold: '',
      itemcategory: ''
    };
  }
  

  render() {
    return (
      <div className="item-bg"> 
        <div className="item-wrapper">
          <div className="item-form-button-wrapper">
            <form className="item-form" onSubmit={this.submitHandler}>
              <div className="item-input-wrapper">
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
                <div className="category-dropdown">
                  <select name='itemcategory' value={this.state.itemcategory} onChange={this.handleChanges} required>
                    <option value='' disabled>Item Category</option>
                    <option value='produce'>Produce</option>
                    <option value='meat'>Meat</option>
                    <option value='fish'>Fish</option>
                    <option value='dairy'>Dairy</option>
                    <option value='spices'>Spices</option>
                    <option value='bar'>Bar</option>
                    <option value='canned_goods'>Canned Goods</option>
                    <option value='dry_goods'>Dry Goods</option>
                    <option value='supplies'>Supplies</option>
                    <option value='miscellaneous'>Miscellaneous</option>
                  </select>
                </div>
                <div>
                  <input
                    type='number'
                    min='0'
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
                    required
                  />
                </div>
                <div>
                  <input
                    type='number'
                    min='0'
                    placeholder="Low Stock Threshold"
                    name="itemthreshold"
                    value={this.state.itemthreshold}
                    onChange={this.handleChanges}
                    required
                  />
                </div>
              </div>         
              <div className="item-button-wrapper">
                <button className="item-form-button" onSubmit={this.submitHandler}>Save Item</button>
                <button className="item-form-button" onClick={this.goBack}>Back to the Pantry</button>

                {/* <Link className="item-form-button Link"to="/itemPage">Back to the Pantry</Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.activeItem) {
      this.setState({
        ...this.props.activeItem
      })
    }
  }

  handleChanges = e => {
    let value = e.target.value
    if (e.target.name === "itemquantity" || e.target.name === "itemthreshold") {
      value = parseInt(value)
    }
    this.setState({
      [e.target.name]: value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const newItem = {...this.state}
    console.log("newItem", newItem)
    if (this.props.activeItem) {
      this.props.updateItem(newItem)
    } else {
      this.props.addItem(newItem);
    }
    //reset form after item was added
    this.setState({
      itemname: '',
      itemquantity: '',
      itemunit: '',
      itemthreshold: '',
      itemcategory: ''
    })
    // this.props.history.push("/itemList")
  };

  goBack = e => {
    e.preventDefault();
    this.props.history.push("/itemList");
  }
}

const mapStateToProps = state => ({
  items: state.items,
  addingItem: state.addingItem,
  updatingItem: state.updatingItem,
  activeItem: state.activeItem
});

export default connect(
  mapStateToProps,
  {
    addItem, updateItem
  }
)(ItemForm);