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

  handlePrice(date) {
    
    const mseconds =
      Date.parse(this.state.check_out) - Date.parse(this.state.check_in);
    const days = (mseconds / (1000 * 60 * 60 * 24)) * this.props.list.price;
    this.setState({
      price: days,
      check_out: date
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
        capacity: this.state.capacity,
        price: this.state.price,
      };
      this.props
        .patchBooking(booking)
        .then(this.props.history.push(`/users/${this.props.currentUser.id}`));
    }
  }

  render() {
    const listprice = this.props.list ? this.props.list.price : ""
    const capacity = this.props.list ? this.props.list.capacity : ""

    return (
      <div className="widget-update-container">
        <div className="widget-container">
          <form className="wrapper" onSubmit={this.handleSubmit}>
            <div className="price-wrapper">
              <div className="price">
                ${listprice}
                <p>per night</p>
              </div>
            </div>
            <div className="dates-and-guest-content">
              <div className="col checkin">
                <div className="label">
                  Check in
                    <SingleDatePicker
                    displayFormat={() => ("MM/DD/YYYY")}
                    placeholder="Select Start"
                    date={this.state.check_in} // momentPropTypes.momentObj or null
                    onDateChange={(date) => this.setState({ check_in: date })} // PropTypes.func.isRequired
                    focused={this.state.focusedStart} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focusedStart: focused })} // PropTypes.func.isRequired
                    id="start" // PropTypes.string.isRequired,
                    verticalSpacing={0}
                    isDayHighlighted={(day) => this.highlighted(day)}
                    numberOfMonths={1}
                    daySize={36}
                    noBorder={true}
                    hideKeyboardShortcutsPanel={true}
                  />
                </div>
              </div>
              <div className="col checkout">
                <div className="label">
                  Check out
                    <SingleDatePicker locale="en-gb"
                    displayFormat={() => ("MM/DD/YYYY")}
                    placeholder="Select End"
                    date={this.state.check_out} // momentPropTypes.momentObj or null
                    onDateChange={(date) => this.setState({ check_out: date })} // PropTypes.func.isRequired
                    focused={this.state.focusedEnd} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focusedEnd: focused })} // PropTypes.func.isRequired
                    id="end" // PropTypes.string.isRequired,
                    verticalSpacing={0}
                    isDayHighlighted={(day) => this.highlighted(day)}
                    numberOfMonths={1}
                    daySize={36}
                    noBorder={true}
                    hideKeyboardShortcutsPanel={true}
                    onDateChange={date => this.handlePrice(date)}
                  />
                </div>
              </div>
              <div className="col capacity">
                <div className="label">
                  Guests
                    <div className="SingleDatePicker SingleDatePicker_1">
                    <div className="SingleDatePickerInput SingleDatePickerInput_1">
                      <div className="DateInput DateInput_1">
                        <input
                          type="number"
                          name="capacity"
                          className="DateInput_input DateInput_input_1"
                          placeholder="1"
                          value={this.state.capacity}
                          id="capacity_input"
                          min="1"
                          max={capacity}
                          onChange={this.handleCapacity}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="booking-button">Request to Book</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingUpdateForm;