import React from "react";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BookingUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.booking)
    debugger;
    this.state = {
      price: this.props.booking.price || "error",
      check_in: this.props.booking.check_in.substring(0, 10),
      check_out: this.props.booking.check_out.substring(0, 10),
      capacity: this.props.booking.capacity,
      id: this.props.booking.id,
      listing_name: this.props.booking.name,
      user_id: this.props.booking.user_id,
    };

    this.highlighted = this.highlighted.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCapacity = this.handleCapacity.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   price: this.props.booking.price,
    // });
  }

  handlePrice(date) {
    const mseconds =
      Date.parse(date) - Date.parse(this.state.check_in);
    const days = (mseconds / (1000 * 60 * 60 * 24)) * this.props.listings[this.props.booking.listing_id].price;
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
      this.setState({
        price: null
      });
      
    } else {
      const booking = {
        check_in: this.state.check_in.format("DD-MM-YYYY"),
        check_out: this.state.check_out.format("DD-MM-YYYY"),
        capacity: this.state.capacity,
        price: this.state.price,
        id: this.props.booking.id,
        listing_name: this.props.listings[this.props.booking.listing_id].name,
        user_id: this.props.booking.user_id,
      };
      this.props.patchBooking(booking)
      .then(() => this.props.closeModal())
      .then(() => this.props.fxn(booking))
    }
  }

  render() {
    // let listprice = 
    // let capacity = 

    return (
      <div className="widget-update-container">
        <div className="widget-container">
          <form className="wrapper" onSubmit={this.handleSubmit}>
            <div className="price-wrapper">
              <div className="price">
                ${this.state.price}
                <p>per night</p>
              </div>
            </div>
            <div className="dates-and-guest-content">
              <div className="col checkin">
                <div className="label">
                  Check in
                    {/* <SingleDatePicker
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
                  /> */}
                </div>
              </div>
              <div className="col checkout">
                <div className="label">
                  Check out
                    {/* <SingleDatePicker locale="en-gb"
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
                  /> */}
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
                          max={this.state.capacity}
                          onChange={() => this.handleCapacity}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="booking-button">Update Booking</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingUpdateForm;