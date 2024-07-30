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

        }

        this.highlighted = this.highlighted.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCapacity = this.handleCapacity.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);

    };

    componentDidMount() {
      this.props.removeBookingErrors([])
    }

    componentDidUpdate() {
      if (this.state.errors !== this.props.errors[0]) {
        this.setState({
          errors: this.props.errors[0]
        });
      };
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

    highlighted(day) {
        return day.isSame(this.state.check_in);
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
              check_in: this.state.check_in.format("YYYY-MM-DD"),
              check_out: this.state.check_out.format("YYYY-MM-DD"),
              capacity: this.state.capacity,
              listing_id: this.props.list.id,
              user_id: this.props.currentUser.id,
              host_id: this.props.list.host_id,
              listing_name: this.props.list.name,
              price: this.state.price
          };
          
          this.props.createBooking(booking)
              .then(() => (this.props.history.push(`/users/${this.props.currentUser.id}`)));
        };
    }

    render () {
      let BookingError = null
      if (this.state.errors) {
        BookingError = this.state.errors
      };
      
        return (
          <div className="widget-container">
            <form className="w100 flex flex-col" onSubmit={this.handleSubmit}>
              <div className="price-wrapper  booking-border-bot">
                <div className="price">
                  {`$${this.props.list.price}`}
                  <p>per night</p>
                  <span className="booking_errors">{BookingError}</span>
                </div>
              </div>

              <div className="dates-and-guest-content booking-border-bot">
                <div className="col booking-border margin7" >
                  {/* <div className="label booking-label" > */}
                    <p className="flex-col-center">Add dates</p>
                        
                  {/* </div> */}
                      <DatePicker
                          // wrapperClassName=""
                          // calendarClassName=""
                          // dayClassName="green-background"
                          showIcon
                          selected={this.state.check_in} 
                          onChange={this.handleCheckIn}
                          startDate={this.state.check_in}
                          endDate={this.state.check_out}
                          selectsRange
                          // openToDate = {new Date()}
                          monthsShown={2}
                        /> 
                </div>

                {/* <div className="col capacity"> */}
                  <div className="label booking-border ">
                    <p>Add guests
</p>
                    {/* <div className="SingleDatePicker SingleDatePicker_1">
                      <div className="SingleDatePickerInput SingleDatePickerInput_1"> */}
                        {/* <div className=""> */}
                          <input
                            type="number"
                            name="capacity"
                            // className="DateInput_input DateInput_input_1"
                            placeholder="1"
                            id="capacity_input"
                            min="1"
                            max={this.props.list.capacity}
                            onChange={() => this.handleCapacity}
                          />
                        {/* </div> */}
                      {/* </div>
                    </div> */}
                  </div>
                {/* </div> */}

              </div>
              
              <button className="booking-button">Request to Book</button>
            </form>
          </div>
        );
    }
}

export default withRouter(BookingForm);