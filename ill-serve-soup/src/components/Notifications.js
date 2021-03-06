import React from "react";

class Notifications extends React.Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    };
  }

  componentDidMount() {
    this.getNotifications();
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.getNotifications();
    }
  }
  
  getNotifications = () => {
    let alerts = [];
    if (this.props.items.length > 0) {
      this.props.items.forEach(item => {
        if (item.itemquantity === 0) {
          alerts.push({
            item: item.itemname,
            warning: `${item.itemname[0].toUpperCase() + item.itemname.slice(1).toLowerCase()} is out of stock!`
          })
        } else if (item.itemquantity < item.itemthreshold) {
          alerts.push({
            item: item.itemname,
            warning: `${item.itemname[0].toUpperCase() + item.itemname.slice(1).toLowerCase()} is running low.`
          });
        }
      });
    }
    if (alerts.length === 0) {
      alerts.push({
        item: '',
        warning: 'Ready to Get Cooking'
      });
    }
    this.setState({
      notifications: alerts
    });
  };

  render() {
    return (
      <div className='notifications-container'>
        {this.state.notifications.map((item, index) => (
          <div onClick={(event) => this.props.searchByName(event, item.item)} className='low-stock' key={index}>{item.warning}</div>
        ))}
      </div>
    );
  }
}

export default Notifications;