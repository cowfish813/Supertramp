json.extract! @booking, :id
json.listing_id @booking.listing_id
json.user_id @booking.user_id
json.listing_name @booking.listing_name
json.check_in @booking.check_in
json.check_out @booking.check_out
json.price @booking.price
json.host_id @booking.host_id