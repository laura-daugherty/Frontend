import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//import { updateItem } from "../actions";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    /*
    const activeItem = this.props.activeItem
    this.state = {}
    if (activeItem) {
      this.state = {...this.props.activeItem}
    }
    */
    this.state = {
      itemname: '',
      itemquantity: '',
      itemunit: '',
      itemthreshold: '',
      itemcategory: ''
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
              type='text'
              placeholder="Item Name"
              name="itemname"
              value={this.state.itemname}
              onChange={this.handleChanges}
              required
            />
          </div>
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
              required
            />
          </div>
          <div>
            <input
              type='number'
              placeholder="Low Stock Threshold"
              name="itemthreshold"
              value={this.state.itemthreshold}
              onChange={this.handleChanges}
              required
            />
          </div>
          <div>
            <div onClick={this.updateHandler}>
              <h3>Update Your Item</h3>
            </div>
          </div>
        </form>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.activeItem) {
      this.setState({
        ...this.props.activeItem,
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeItem && prevProps.activeItem !== this.props.activeItem) {
      this.setState({
        ...this.props.activeItem
      })
    }
  }

  handleChanges = e => {
    e.persist();
    let value = e.target.value
    if (e.target.name === "itemquantity" || e.target.name === 'itemthreshold') {
       value = parseInt(value)
    }
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
  updateHandler = (e) => {
    e.preventDefault();
    let updatedItem = {...this.state}
    this.props.updateItem(e, updatedItem);
    this.setState({
      itemname: '',
      itemquantity: '',
      itemunit: '',
      itemthreshold: '',
      itemcategory: ''
    })
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(
  mapStateToProps,
  {
    
  }
)(UpdateForm);
