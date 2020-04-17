  
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
            listingId: this.props.match.params.listingId,
            listingName: this.props.listing_name,//INVESTIGATE STATE OF LISTING.
            check_in: null,
            check_out: null,
            capacity: 1,
            focusedStart: null,
            focusedEnd: null,
        }
        this.highlighted = this.highlighted.bind(this);
        this.handleCapacity = this.handleCapacity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCapacity(num) {
        this.setState({
            capacity: num
        });
    };

    highlighted(day) {
        return day.isSame(this.state.check_in)
    };

    handleSubmit(e) {
        e.preventDefault();

        if(!(this.props.currentUser)) { //check currentuser
            this.props.openModal('Login')
        } else if(!(this.state.check_in) || !(this.state.check_out)) {
            return 'Booking Error'
        };
        const booking = {
            user_id: this.props.currentUserId,
            listingId: listingId,
            listingName: this.props.listing_name,
            check_in: this.state.check_in.format('YYY/MM/DD'),
            check_out: this.state.check_out.format('YYY/MM/DD'),
            capacity: 1
        }
        this.props.createBooking(booking)
            .then(this.props.history.push(`./users/${this.props.currentUser}`)); //reroutes to user show page
    };


    render () {
        return (
          <div className="widget-container">
            <form className="wrapper" onSubmit={this.handleSubmit}>
              <div className="price-wrapper">
                <div className="price">
                    {/* should price go here!!?? */}
                </div>
              </div>
              <div className="dates-and-guest-content">
                <div className="col checkin">
                  <div className="label">
                    Check in
                    <SingleDatePicker
                      placeholder="Check In"
                      date={this.state.check_in} // momentPropTypes.momentObj or null
                      onDateChange={(date) => this.setState({ date })} // PropTypes.func.isRequired
                      focused={this.state.focused} // PropTypes.bool
                      onFocusChange={({ focused }) =>
                        this.setState({ focusedStart: focused })
                      } // PropTypes.func.isRequired
                      id="check_in" // PropTypes.string.isRequired,
                      verticalSpacing={0}
                      isDayHighlighted={(day) => this.highlighted(day)} //method written
                      numberOfMonths={1}
                      daySize={50}
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
                      onDateChange={(date) => this.setState({ date })} // PropTypes.func.isRequired
                      focused={this.state.focused} // PropTypes.bool
                      onFocusChange={({ focused }) => this.setState({ focusedEnd: focused })} // PropTypes.func.isRequired
                      id="check_out" // PropTypes.string.isRequired,
                      verticalSpacing={0}
                      isDayHighlighted={(day) => this.highlighted(day)} //method written
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
                    <input type="number" name="" id="" className="col_box" />
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


