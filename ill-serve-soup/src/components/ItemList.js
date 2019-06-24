import React from "react";
import { connect } from "react-redux";

//Needed Component Imports
import Item from "./Item"

// Needed Action Imports
import { fetchingItems } from "../actions";

class ItemList extends React.Component {

  render() {
    return (
      <div className="items-wrapper">
        {this.props.loading ? (
          <div className="loader">
            Loading...
          </div>
        ) : (
          <>
            {this.props.items.map(item => (
              <Item item={item} />
            ))}
          </>
        )}
      </div>
    );
  }
  
  componentDidMount() {
    this.props.fetchingItems();
  }
}

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  {
    fetchingItems,
  }
)(ItemList);