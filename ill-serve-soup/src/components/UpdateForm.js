import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { updateItem } from "../actions";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    const activeItem = this.props.activeItem
    this.state = {}
    if (activeItem) {
      this.state = {...this.props.activeItem}
    }
  }
  // state = {
  //   itemname: this.props.activeItem.itemname,
  //   itemquantity: '',
  //   itemunit: '',
  //   itemthreshold: '',
  //   itemcategory: ''
  // };
  render() {
    console.log("state", this.state)
    return (
      <div> 
        <Link to='/itemList'>Back to inventory</Link>
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
            <div onClick={this.updateItem}>
              <h3>Update Your Item</h3>
            </div>
          </div>
        </form>
      </div>
    )
  }

  handleChanges = e => {
    e.persist();
    let value = e.target.value
    // if (e.target.name === "itemquantity") {
    //   value = parseInt(value)
    // }
    // if (e.target.name === "itemthreshold") {
    //   value = parseInt(value)
    // }
    this.setState({ [e.target.name]: value });
  };

  // updateItem = e => {
  //   console.log("update props", this.props)
  //   console.log("update state", this.state)
  //   e.preventDefault();
  //   const updatedItem = {
  //     itemname: this.state.itemname,
  //     itemquantity: this.state.itemquantity,
  //     itemunit: this.state.itemunit,
  //     itemthreshold: this.state.itemthreshold,
  //     itemcategory: this.state.itemcategory
  //   };
  //   console.log("updatedItem", updatedItem)
  //   this.props.updateItem(updatedItem);
  // };
  updateItem = e => {
    e.preventDefault();
    console.log(updateItem)
    console.log(this.state)
    this.props.updateItem(this.state)
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(
  mapStateToProps,
  {
    updateItem
  }
)(UpdateForm);
