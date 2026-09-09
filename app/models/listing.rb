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
require 'image_processing/vips'

class Listing < ApplicationRecord
    validates :cancellation_policy, :capacity, :description, :minimum_nights, :name, :on_arrival, :price, presence: true

    belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

    has_many :bookings,
    foreign_key: :listing_id,
    dependent: :destroy

    has_many_attached :photos
    after_commit :convert_photos_to_webp, on: [:create, :update]

    # def ensure_photo
    #     unless self.photo.attached?
    #         errors[:photo] << "Must have photo attachment"
    #     end
    # end


    # def self.in_bounds(bounds)
    #     self.where("lat < ?", bounds[:northEast][:lat])
    #         .where("lat > ?", bounds[:southWest][:lat])
    #         .where("lng > ?", bounds[:southWest][:lng])
    #         .where("lng < ?", bounds[:northEast][:lng])
    # end

    def self.in_bounds(bounds)
        if bounds[:northEast][:lng] < bounds[:southWest][:lng]
        # Bounding box crosses the International Date Line
            listings_in_bounds_1 = self.where("lat < ?", bounds[:northEast][:lat])
                .where("lat > ?", bounds[:southWest][:lat])
                .where("lng > ?", bounds[:southWest][:lng])
                .where("lng < ?", 180)
            listings_in_bounds_2 = self.where("lat < ?", bounds[:northEast][:lat])
                .where("lat > ?", bounds[:southWest][:lat])
                .where("lng > ?", -180)
                .where("lng < ?", bounds[:northEast][:lng])
            listings_in_bounds_1.or(listings_in_bounds_2)
        else
      # Bounding box does not cross the International Date Line
            self.where("lat < ?", bounds[:northEast][:lat])
                .where("lat > ?", bounds[:southWest][:lat])
                .where("lng > ?", bounds[:southWest][:lng])
                .where("lng < ?", bounds[:northEast][:lng])
        end  
    end

    has_many :reviews,
    foreign_key: :listing_id,
    dependent: :destroy

    private

    def convert_photos_to_webp
        return if Rails.env.test? || ENV['SKIP_WEBP_CONVERSION']
        photos_to_convert = photos.select{ |p| p.content_type.in?(%w[image/jpeg])}
        return if photos_to_convert.empty?

        photos_to_convert.each do |photo|
            begin
                convert_single_photo(photo)
            rescue => exception
                # Rails.logger.error("WebP conversion failed for photo #{photo.id}": "#{exception.message}")
                Rails.logger.error("WebP conversion failed for photo #{photo.id}: #{exception.message}")
                next
            end

        end
    end

    def convert_single_photo(photo)
        converted_io = ImageProcessing::Vips
            .source(photo.download)
            .convert('webp')
            .saver(quality: 85)
            .call

        new_filename="#{File.(photo.filename.to_s, '.*')}.webp"

        new_blob = ActiveStorage::Blob.create_and_upload!(
            io: File.open(converted_io.path),
            filename: new_filename,
            content_type: 'image/webp'
        )

        photos.attach(new_blob)
        photo.purge#_later
    ensure
        converted_io&.close! #if converted_io.respond_to?(:close!)
    end

end
