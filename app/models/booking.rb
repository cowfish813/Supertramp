# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  capacity   :integer          not null
#  check_in   :datetime         not null
#  check_out  :datetime         not null
#  host_id    :integer          not null
#  listing_id :integer          not null
#  user_id    :integer
#
# Indexes
#
#  index_bookings_on_host_id     (host_id)
#  index_bookings_on_listing_id  (listing_id)
#  index_bookings_on_user_id     (user_id)
#
class Booking < ApplicationRecord
end
