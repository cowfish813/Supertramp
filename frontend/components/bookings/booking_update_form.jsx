import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BookingUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: this.props.booking.price || "error",
      check_in: this.props.booking.check_in,
      check_out: this.props.booking.check_out,
      capacity: this.props.booking.capacity,
      id: this.props.booking.id,
      user_id: this.props.booking.user_id,
      listing_name: this.props.booking.listing_name,
      max_capacity: "0",
      listing_id: this.props.booking.listing_id,
      min_stay: 0,
      guest: this.props.booking.capacity > 1 ? "Guests" : "Guest"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCapacity = this.handleCapacity.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.state.listing_id)
      .then(res => {
        this.setState({
          max_capacity: res.listing.capacity,
          min_stay: res.minimum_nights
        })
      })
  }

  handlePrice(date) {
    const mseconds = Date.parse(date) - Date.parse(this.state.check_in);
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
    event.currentTarget.value > 1 ? 
      this.setState({guest: "Guests"}) : this.setState({guest: "Guest"});
  }

  handleCheckIn(dates) {
      const [start, end] = dates;
      this.setState({ check_in: start, check_out: end });
      this.handlePrice(end);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.price <= 0) {
      this.setState({
        price: null
      });
      
    } else {
      const booking = {
        check_in: this.state.check_in.toISOString(),
        check_out: this.state.check_out.toISOString(),
        capacity: this.state.capacity,
        price: this.state.price,
        id: this.props.booking.id,
        listing_name: this.state.name,
        user_id: this.props.booking.user_id,
      };

      this.props.patchBooking(booking)
        .then(() => this.props.closeModal())
        .then(() => this.props.fxn(booking))
    }
  }

  render() {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    return (
        <div className="widget-container">
          <form className="w100" onSubmit={this.handleSubmit}>
            <div className="price-wrapper">
              <div className="price">
                ${this.state.price}
                <p>per night</p>
              </div>
            </div>
            <div className="dates-and-guest-content">

              <div className="booking-label col booking-border margin7">
                  <p className="flex">Change Dates</p>
                  <DatePicker
                      id="datePicker"
                      showIcon
                      onChange={this.handleCheckIn}
                      startDate={this.state.check_in}
                      endDate={this.state.check_out}
                      selectsRange
                      monthsShown={2}
                      placeholderText="Select Date"
                      toggleCalendarOnIconClick
                      excludeDateIntervals={[{ start: "1968/01/01", end: yesterday }]}
                  />
              </div>

              <div className="col capacity">
                <div className="label">
                  <p>{this.state.guest}</p>
                  <input
                    type="number"
                    name="capacity"
                    placeholder={this.state.capacity}
                    id="capacity_input"
                    min="1"
                    max={this.state.max_capacity}
                    onChange={this.handleCapacity}
                  />
                </div>
              </div>

            </div>
            <button className="booking-button">Update Booking</button>
          </form>
      </div>
    );
  }
}

export default BookingUpdateForm;