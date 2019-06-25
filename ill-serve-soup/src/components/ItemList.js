import React from "react";
import { connect } from "react-redux";

//Needed Component Imports
import Item from "./Item"

// Needed Action Imports
import { fetchItems } from "../actions";

class ItemList extends React.Component {

  render() {
    return (
      <div>

      <nav>
        <div>LOGO</div>
      </nav>
        {/* Conditional Rendering - if @ certain path, display element */}
      <div className="notification-banner">
        {/* Display <Notification> element here */}
        NOTIFICATION! This stuff is Low
      </div>

      <div className="sidebar">
        Sidebar
        {/* Display <Sidebar> element here */}
      </div>

      <div className="items-wrapper">
        {this.props.loading ? (
          <div className="loader">
            Loading...
          </div>
        ) : (
          <>
            {/* {this.props.items.map(item => (
              <Item item={item}/>
            ))} */}
            <Item item={this.item}/>
          </>
        )}
      </div>
      </div>

    )
  }

  componentDidMount() {
    // console.log("CDM", this.props)
    this.props.fetchItems();
  }
}

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading,
  error: state.error
});

export default connect(
  mapStateToProps,
  {
    fetchItems,
  }
)(ItemList);