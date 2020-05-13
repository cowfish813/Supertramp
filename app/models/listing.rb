# == Schema Information
#
# Table name: listings
#
#  id                  :bigint           not null, primary key
#  cancellation_policy :string           not null
#  capacity            :integer          not null
#  checkin             :datetime
#  checkout            :datetime
#  country             :string           not null
#  description         :text             not null
#  lat                 :float
#  lng                 :float
#  minimum_nights      :integer          not null
#  name                :string           not null
#  on_arrival          :string           not null
#  price               :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  host_id             :integer
#
# Indexes
#
#  index_listings_on_host_id  (host_id)
#
class Listing < ApplicationRecord
    validates :cancellation_policy, :capacity, :description, :minimum_nights, :name, :on_arrival, :price, presence: true
    # validating presence true for all

    belongs_to :user,
    foreign_key: :host_id

    has_many :bookings,
    foreign_key: :listing_id

    # has_many_attached :photos
    has_one_attached :photo

    # def ensure_photo
    #     unless self.photo.attached?
    #         errors[:photo] << "Must have photo attachment"
    #     end
    # end


    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])   
    end

    has_many :reviews,
    foreign_key: :listing_id

    

end
