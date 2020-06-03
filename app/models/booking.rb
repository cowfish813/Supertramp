
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
    validate :validate_other_booking_overlap

    # validates :status, inclusion: {in: STATUS}
    # validate :does_not_overlap_approved_request

    # validate :validate_list_capacity



    belongs_to :user
    # foreign_key: :user_id

    belongs_to :listing
    # foreign_key: :listing_id
    
    belongs_to :host,
    foreign_key: :user_id,
    class_name: :User


    # def overlapped_booking
    #     listing = Listing.find_by(id: self.listing_id)
    # end

    def period
        :check_in..:check_out
    end


    def validate_other_booking_overlap
        #prevents others from booking when booked
        # other_bookings = Booking.where("user_id = ? OR listing_id = ?", self.user_id, self.listing_id)

        #prevents self from double booking
        other_bookings = Booking.where("user_id = ?", self.user_id)
        is_overlapping = other_bookings.any? do |booking|
            self.check_in <= booking.check_out && booking.check_in <= self.check_out
        end
        errors.add(:booking, "error, you already booked!") if is_overlapping
    end
    # def capacity_met
    #     other_bookings = Booking.where("listing_id = ?", self.listing_id)
    #     # cap = other_bookings.any? do ||

    #     # end
    #     errors.add(:booking, "error, capacity already met!")
    # end

    # def validate_other_booking_overlap
    #     # sql = "daterange(check_in, check_out, '[]') && daterange(:check_in, :check_out, '[]')"
        
        
    #     sql = <<~SQL
    #     (
    #         (check_in <= :check_in and :check_in <= check_out) or
    #         (check_in <= :check_out and :check_out <= check_out)
    #         ) or (
    #             (:check_in <= check_in and check_in <= :check_out) or
    #             (:check_in <= check_out and check_out <= :check_out)
    #             )            
    #     SQL
                # is_overlapping = Booking.where(sql, check_in: :check_in, check_out: :check_out).exists?
                # errors.add(:booking, "error, you already booked!") if is_overlapping      
        # errors.add(:booking, "error, you already booked!") if is_overlapping
    # end 

    # def validate_list_capacity
    #     other_bookings = Booking.where("listing_id = ?", self.listing_id)
    #     is_full = other_bookings.any? do |booking|

    #     end
    #     errors.add("booking", "is full!") if is_full
    # end


    # def validate_other_booking_overlap(user_id, listing_id)
    #     sql = "daterange(check_in, check_out, '[]') && daterange(:check_in, :check_out, '[]')"
    #     is_overlapping = Booking.where(sql, check_in: c.check_in, check_out: c.check_out).exists?
    #     errors.add(:overlaps_with_other) if is_overlapping
    # end

end
