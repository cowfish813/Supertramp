  
import React from "react";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";


class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUserId,
            listingId: this.props.list.id,
            listingName: this.props.list.name,
            price: this.props.list.price,
            check_in: null,
            check_out: null,
            capacity: 1,
            focusedStart: null,
            focusedEnd: null,
        }
        this.highlighted = this.highlighted.bind(this);
        this.handleCapacity = this.handleCapacity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
    };

    handlePrice() {
      let num = this.handleCapacity()
        this.setState({
          price: ( num * this.props.list.price )
      });
      return this.state.price
    };

    handleCapacity() {
      let num = document.getElementById("capacity");
      return num
    }

    componentDidUpdate() {

    }

    highlighted(day) {
        return day.isSame(this.state.check_in)
    };

    handleSubmit(e) {
        e.preventDefault();
        // debugger

        if(!(this.props.currentUser)) { //check currentuser
            this.props.openModal('Login')
        } else if(!(this.state.check_in) || !(this.state.check_out)) {
            // return 'Booking Error'
            console.log("booking error")
        } else {

          const booking = {
              user_id: this.props.currentUserId,
              listingId: this.props.list.id,
              listingName: this.props.list.name,
              check_in: this.state.check_in.format('YYY/MM/DD'),
              check_out: this.state.check_out.format('YYY/MM/DD'),
              capacity: 1
          }
          this.props.createBooking(booking)
              .then(this.props.history.push(`./users/${this.props.currentUser.id}`)); //reroutes to user show page
        }
    };

    componentDidUpdate() {

    }

    render () {
        return (
          <div className="widget-container">
            <form className="wrapper" onSubmit={this.handleSubmit}>
              <div className="price-wrapper">
                <div className="price">
                  {this.state.price}
                  {`$${this.props.list.price}`}
                </div>
              </div>
              <div className="dates-and-guest-content">
                <div className="col checkin">
                  <div className="label">
                    Check in
                    <SingleDatePicker
                      placeholder="Check In"
                      date={this.state.check_in} // momentPropTypes.momentObj or null
                      onDateChange={(date) => this.setState({ check_in: date })} // PropTypes.func.isRequired
                      focused={this.state.focusedStart} // PropTypes.bool
                      onFocusChange={({ focused }) => this.setState({ focusedStart: focused })} // PropTypes.func.isRequired
                      id="start" // PropTypes.string.isRequired,
                      verticalSpacing={0}
                      isDayHighlighted={(day) => this.highlighted(day)} //method written
                      numberOfMonths={1}
                      daySize={36}
                      noBorder={true}
                    />
                    {/* <input type="date" className="col_box" /> */}
                  </div>
                </div>
                <div className="col checkout">
                  <div className="label">
                    Check out
                    <SingleDatePicker
                      placeholder="Check In"
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
                    />
                    {/* <input type="date" name="" id="" className="col_box" /> */}
                  </div>
                </div>
                <div className="col capacity">
                  <div className="label">
                    Guests
                      <input 
                      type="number" 
                      name="capacity" 
                      className="col_box" 
                      placeholder="1" 
                      // value ="1"
                      id="capacity" 
                      min="1" 
                      max={this.props.list.capacity} 
                      onChange={this.handlePrice}
                      />
                  </div>
                </div>
              </div>
              <button className="booking-button">Request to Book</button>
            </form>
          </div>
        );
    }

}
export default withRouter(BookingForm)


