
# == Schema Information
#
# Table name: bookings
#
#  id           :bigint           not null, primary key
#  capacity     :integer          not null
#  check_in     :datetime         not null
#  check_out    :datetime         not null
#  listing_name :string
#  price        :integer
#  host_id      :integer          not null
#  listing_id   :integer          not null
#  user_id      :integer
#
# Indexes
#
#  index_bookings_on_host_id     (host_id)
#  index_bookings_on_listing_id  (listing_id)
#  index_bookings_on_user_id     (user_id)
#
class Booking < ApplicationRecord
    # status = %w(PENDING APPROVED DENIED)
    validates :check_in, :check_out, :listing_id, :user_id, :capacity ,presence: true
    validate :validate_other_booking_overlap, on: :create
    # validates :status, inclusion: {in: STATUS}



    belongs_to :user
    # foreign_key: :user_id

    belongs_to :listing
    # foreign_key: :listing_id
    
    belongs_to :host,
    foreign_key: :user_id,
    class_name: :User

    def period
        :check_in...:check_out
    end


    def validate_other_booking_overlap
        #prevents OTHERS from booking when booked
        other_bookings = Booking.where("user_id = ? OR listing_id = ?", self.user_id, self.listing_id)

        is_overlapping = other_bookings.any? do |booking|
            self.check_in < booking.check_out && booking.check_in < self.check_out
        end
        errors.add(:booking, "error, you already booked! Please update pre-existing booking") if is_overlapping
    end

end
