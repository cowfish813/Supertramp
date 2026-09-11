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

    def self.in_bounds(bounds)
        ne = bounds[:northEast]
        sw = bounds[:southWest]

        ne_lat = ne[:lat].to_f
        ne_lng = ne[:lng].to_f
        sw_lat = sw[:lat].to_f
        sw_lng = sw[:lng].to_f

        if ne_lng < sw_lng
            # Crosses the International Date Line
            self.where("lat < ?", ne_lat)
                .where("lat > ?", sw_lat)
                .where("lng > ? OR lng < ?", sw_lng, ne_lng)
        else
            self.where("lat < ?", ne_lat)
                .where("lat > ?", sw_lat)
                .where("lng > ?", sw_lng)
                .where("lng < ?", ne_lng)
        end
    end

    has_many :reviews,
    foreign_key: :listing_id,
    dependent: :destroy

    private

    def convert_photos_to_webp
        return if Rails.env.test? || ENV['SKIP_WEBP_CONVERSION']

        key = :"converting_webp_listing_#{id}"
        return if Thread.current[key]
        Thread.current[key] = true

        begin
            photos_to_convert = photos.select do |p|
            p.content_type == 'image/jpeg' &&
                p.blob.present? &&
                p.blob.service.exist?(p.blob.key)
            end
            return if photos_to_convert.empty?

            photos_to_convert.each do |photo|
                begin
                    convert_single_photo(photo)
                rescue => exception
                    Rails.logger.error("WebP conversion failed for photo #{photo.id}: #{exception.message}")
                    next
                end
            end
        ensure
            Thread.current[key] = nil
        end
    end

    def convert_single_photo(photo)
    photo.blob.open do |source_file|
        Tempfile.create(['converted', '.webp']) do |dest|
        ImageProcessing::Vips
            .source(source_file)
            .saver(quality: 85)
            .call(destination: dest.path)   # ← keyword, not positional

        photos.attach(
            io: File.open(dest.path, 'rb'),
            filename: "#{File.basename(photo.filename.to_s, '.*')}.webp",
            content_type: 'image/webp'
        )
        end
    end
    photo.purge
    end

end