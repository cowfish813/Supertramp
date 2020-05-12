import React from 'react';
import { withRouter } from "react-router-dom";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import "moment/locale/it";

class BookingUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: null,
      listing_id: null,
      listing_name: null,
      price: null,
      check_in: null,
      check_out: null,
      capacity: null,
      focusedStart: null,
      focusedEnd: null,
    };

    this.highlighted = this.highlighted.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCapacity = this.handleCapacity.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
  }

  handlePrice(e) {
    e.preventDefault();
    const mseconds =
      Date.parse(this.state.check_out) - Date.parse(this.state.check_in);
    const days = (mseconds / (1000 * 60 * 60 * 24)) * this.props.list.price;
    this.setState({
      price: days,
    });
  }

  handleCapacity(event) {
    this.setState({
      capacity: event.currentTarget.value,
    });
  }

  highlighted(day) {
    return day.isSame(this.state.check_in);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.price <= 0) {
    } else {
      const booking = {
        check_in: this.state.check_in.format("YYYY/MM/DD"),
        check_out: this.state.check_out.format("YYYY/MM/DD"),
        listing_id: this.props.list.id,
        capacity: this.state.capacity,
        user_id: this.props.currentUser.id,
        host_id: this.props.list.host_id,
        listing_name: this.props.list.name,
        price: this.state.price,
      };
      this.props
        .createBooking(booking)
        .then(this.props.history.push(`/users/${this.props.currentUser.id}`));
    }
  }

  render() {
    return (
      <div className="widget-update-container">
            TESTING
      </div>
    );
  }
}

export default BookingUpdateForm;