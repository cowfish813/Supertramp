  
import React from "react";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
// import "../../../app/assets/stylesheets/book_form.scss"; //rewrites react css


class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUserId,
            listing_id: this.props.list.id,
            listing_name: this.props.list.name,
            price: this.props.list.price,
            check_in: null,
            check_out: null,
            capacity: 1,
            focusedStart: null,
            focusedEnd: null,
        }
        this.highlighted = this.highlighted.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleCapacity = this.handleCapacity.bind(this);
        // this.handlePrice = this.handlePrice.bind(this);
    };

    // handlePrice() {
    //   let num = this.state.capacity
    //     this.setState({
    //       price: ( num * this.props.list.price )
    //   });
    //   return this.state.price
    // };

    // handleCapacity(event) {
    //   // debugger
    //   this.setState({
    //     capacity: event.target.value
    //   })
    //   return this.state.capacity
    // }

    highlighted(day) {
        return day.isSame(this.state.check_in)
    };

    handleSubmit(e) {
        e.preventDefault();
        // debugger

        if(!(this.props.currentUser)) { //check currentuser
            this.props.openModal('Login')
        } else if(!(this.state.check_in) || !(this.state.check_out)) {
            console.log("booking error")
        } else {
          const booking = {
              check_in: this.state.check_in.format('YYYY/MM/DD'),
              check_out: this.state.check_out.format('YYYY/MM/DD'),
              listing_id: this.props.list.id,
              capacity: 1,
              user_id: this.props.currentUserId,
              host_id: this.props.list.host_id,
              listing_name: this.props.list.name,
              price: 5
          }
          this.props.createBooking(booking)
              .then(this.props.history.push(`/users/${this.props.currentUser.id}`)); //reroutes to user show page
        }
    };

    render () {
        return (
          <div className="widget-container">
            <form className="wrapper" onSubmit={this.handleSubmit}>
              <div className="price-wrapper">
                <div className="price">
                  {/* {this.state.price} */}
                  {`$${this.props.list.price}`}
                  <p>per night</p>
                </div>
              </div>
              <div className="dates-and-guest-content">
                <div className="col checkin">
                  <div className="label">
                    Check in
                    <SingleDatePicker
                      placeholder="Select Start"
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
                      hideKeyboardShortcutsPanel={true}
                    />
                  </div>
                </div>
                <div className="col checkout">
                  <div className="label">
                    Check out
                    <SingleDatePicker
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
                    />
                  </div>
                </div>
                <div className="col capacity">
                  <div className="label">
                    Guests
                      <input 
                      type="number" 
                      name="capacity" 
                      className="SingleDatePickerInput" 
                      placeholder="1" 
                      value ={this.state.capacity}
                      id="capacity_input" 
                      min="1" 
                      max={this.props.list.capacity} 
                      onChange={this.handleCapacity}
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