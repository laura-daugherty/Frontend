import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Form, Input, Button } from "reactstrap";
import { TweenLite, Power1 } from "gsap";

import { fetchFriends, addFriend } from "./actions/actions";

class Friends extends React.Component {
  state = {
    name: "",
    email: "",
    picture: ""
  };
  render() {
    return (
      <div className="friends-wrapper">
        {this.props.loading ? (
          <div className="loader">
            <Loader type="Grid" color="#fb553b" height={200} width={200} />
          </div>
        ) : (
          <>
            {this.props.friends.map(friend => (
              <div className="card">
                <img
                  className="friend-image"
                  src={friend.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h1>{friend.name}</h1>
                  <h3>{friend.email}</h3>
                </div>
              </div>
            ))}
            
          </>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchFriends();
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      picture: this.state.picture
    };
    this.props.addFriend(newFriend);
  };
}

const mapStateToProps = state => ({
  friends: state.friends,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addFriend
  }
)(Friends);