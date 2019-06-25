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
        if (item.quantity === 0) {
          alerts.push(`${item.name} is out of stock!`);
        } else if (item.quantity < item.threshold) {
          alerts.push(`${item.name} is running low.`);
        }
      });
    }
    if (alerts.length === 0) {
      alerts.push('No alert.');
    }
    this.setState({
      notifications: alerts
    });
  };

  render() {
    return (
      <div className='notifications-container'>
        {this.state.notifications.map((item, index) => (
          <div className='notifications' key={index}>{item}</div>
        ))}
      </div>
    );
  }
}

export default Notifications;