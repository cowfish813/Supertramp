import React from "react";
import { withRouter } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUserId,
            host_id: this.props.host_id,
            listing_id: this.props.list.id,
            price: this.props.list.price,
            capacity: 1,
            listing_name: this.props.list.name,
            check_in: new Date(),
            check_out: new Date(),
            focusedStart: false,
            focusedEnd: false,
            errors: "",
            bookings: {}
        }
        this.myref = React.createRef(null);

        // this.highlighted = this.highlighted.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCapacity = this.handleCapacity.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.handleExclusions = this.handleExclusions.bind(this);

        this.handleFocusCapacity = this.handleFocusCapacity.bind(this);
        this.handleFocusDate = this.handleFocusDate.bind(this);

    };

    componentDidMount() {
      this.setState({bookings: this.props.fetchBookings(this.props.match.params.userId)});
      this.props.removeBookingErrors([]);
    }

    componentDidUpdate() {
      if (this.state.errors !== this.props.errors[0]) {
        this.setState({
          errors: this.props.errors[0]
        });
      };
    }
    
    handleExclusions() {
      // return array of objects eg => 
        // excludeDateIntervals={[{ start: "1968/01/01", end: yesterday}]}
    }

    handleFocusCapacity() {
      const capInput = document.getElementById('capacity_input');
      capInput.focus();
    }
    
    handleFocusDate() {
      const dateInput = document.getElementById('datePicker');
      dateInput.focus();
    }

    handlePrice(date) {
        const mseconds = Date.parse(date) - Date.parse(this.state.check_in);
        const days = mseconds / (1000 * 60 * 60 * 24) * this.props.list.price;
        this.setState({
          price: days,
          check_out: date
        });
    }

    handleCapacity(event) {
      this.setState({
        capacity: event.currentTarget.value
      });
    }

    handleCheckIn (dates) {
      const [start, end] = dates;
      this.setState({ check_in: start });
      this.setState({ check_out: end });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!(this.props.currentUser)) { 
            this.props.openModal('Login');
        } else if (this.state.price <= 0) {
            this.setState({ price: null });
        } else {  
          const booking = {
              check_in: this.state.check_in.toISOString(),
              check_out: this.state.check_out.toISOString(),
              capacity: this.state.capacity,
              listing_id: this.props.list.id,
              user_id: this.props.currentUser.id,
              host_id: this.props.list.host_id,
              listing_name: this.props.list.name,
              price: this.state.price
          };

          this.props.createBooking(booking)
              .then(() => (this.props.history.push(`/users/${this.props.currentUser.id}`)))
        };
    }

    render () {
      console.log(this.state.bookings, "hello");
        //i want bookings, where are they?

      const yesterday = new Date(new Date().setDate(new Date().getDate()-1));
      let BookingError = null
      if (this.state.errors) {
        BookingError = this.state.errors
      };
        return (
          <div className="widget-container">
            <form className="w100 flex flex-col" onSubmit={this.handleSubmit}>
              <div className="price-wrapper">
                <div className="price">
                  {`$${this.props.list.price}`}
                  <p>per night</p>
                  <span className="booking_errors">{BookingError}</span>
                </div>
              </div>

              <div className="dates-and-guest-content">
                
                <div onClick={this.handleFocusDate} id="" className="col booking-border margin7" >
                    <p className="flex-col-center">Add dates</p>
                    <DatePicker
                      id="datePicker"
                      showIcon
                      selected={this.state.check_in} 
                      onChange={this.handleCheckIn}
                      startDate={this.state.check_in}
                      endDate={this.state.check_out}
                      selectsRange
                      monthsShown={2}
                      placeholderText="Select Date"
                      toggleCalendarOnIconClick
                      excludeDateIntervals={[{ start: "1968/01/01", end: yesterday}]}
                    /> 
                </div>

                  <div onClick={this.handleFocusCapacity} className="col booking-border margin 7" >
                    <p className=" mgn-top">Add guests</p>
                      <input
                        type="number"
                        name="capacity"
                        placeholder="1"
                        id="capacity_input"
                        min="1"
                        max={this.props.list.capacity}
                        onChange={() => this.handleCapacity}
                      />
                  </div>

              </div>
              
              <button className="booking-button">Request to Book</button>
            </form>
            {/* shows up on the right side. 
            needs adjustment. also MUST update */}
            {/* <p>
              adf;glhsd;klfjghsdfkjghfsd
              {this.state.price}
            </p> */}
          </div>
        );
    }
}

export default withRouter(BookingForm);