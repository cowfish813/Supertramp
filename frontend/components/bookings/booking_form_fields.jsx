import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const BookingFormFields = ({
    listing,                       // { id, name, price, capacity, host_id }
    initialBooking = null,         // pass when editing an existing booking
    excludedDates = [],            // [{ start: Date, end: Date }]
    submitLabel = "Request to Book",
    dateLabel = "Add dates",
    errors = null,
    onSubmit,                      // receives { check_in, check_out, capacity, price }
    }) => {
      
    const [checkIn, setCheckIn] = 
      useState(initialBooking ? new Date(initialBooking.check_in) : null);
    const [checkOut, setCheckOut] = 
      useState(initialBooking ? new Date(initialBooking.check_out) : null);
    const [capacity, setCapacity] = 
      useState(initialBooking?.capacity ?? 1);

    const nights = checkIn && checkOut ? Math.round((checkOut - checkIn) / MS_PER_DAY) : 0;
    const total = nights * listing.price;

    const handleDates = ([start, end]) => {
      setCheckIn(start);
      setCheckOut(end);
    };

  const handleCapacity = (e) => {
    const value = e.target.value;
    setCapacity(value === "" ? "" : Number(value));
  };

  const focusById = (id) => () => {
    const el = document.getElementById(id);
    if (el) el.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nights <= 0 || !capacity) return;

    onSubmit({
      check_in: checkIn.toISOString(),
      check_out: checkOut.toISOString(),
      capacity,
      price: total,
    });
  };

  return (
    <div className="widget-container">
      <form className="w100 flex flex-col" onSubmit={handleSubmit}>
        <div className="price-wrapper">
          <div className="price">
            {`$${listing.price}`}
            <p>per night</p>
            <span className="booking_errors">{errors}</span>
          </div>
        </div>

        <div className="dates-and-guest-content">
          <div
            onClick={focusById("datePicker")}
            className="booking-label col booking-border margin7"
          >
            <p className="flex">{dateLabel}</p>
            <DatePicker
              id="datePicker"
              showIcon
              selectsRange
              monthsShown={2}
              startDate={checkIn}
              endDate={checkOut}
              onChange={handleDates}
              excludeDateIntervals={excludedDates}
              placeholderText="Select Date"
              toggleCalendarOnIconClick
            />
          </div>

          <div
            onClick={focusById("capacity_input")}
            className="booking-label col booking-border margin7"
          >
            <p className="mgn-top">Add guests</p>
            <div className="flex flex-wrap">
              <input
                type="number"
                name="capacity"
                id="capacity_input"
                min="1"
                max={listing.capacity}
                value={capacity}
                onChange={handleCapacity}
              />
              <p id="guest-grammar">{capacity > 1 ? "guests" : "guest"}</p>
            </div>
          </div>
        </div>

        <div id="price_estimate" className="flex flex-wrap flex-row f-between">
          <p id="estimate_price" className="mrgn-10">
            {listing.price} x {nights || 1} {nights > 1 ? "nights" : "night"}
          </p>
          <p id="total_price" className="mrgn-10">
            Total: ${total || listing.price}
          </p>
        </div>

        <button className="booking-button">{submitLabel}</button>
      </form>
    </div>
  );
};

export default BookingFormFields;