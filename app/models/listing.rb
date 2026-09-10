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

    # def convert_photos_to_webp
    #     return if Rails.env.test? || ENV['SKIP_WEBP_CONVERSION']

    #     # Thread-local guard — survives re-entrant callbacks on the same thread
    #     key = :"converting_webp_listing_#{id}"
    #     return if Thread.current[key]

    #     Thread.current[key] = true
    #     begin
    #         jpeg_attachments = ActiveStorage::Attachment
    #         .joins(:blob)
    #         .where(record_type: 'Listing', record_id: id, name: 'photos')
    #         .where(active_storage_blobs: { content_type: 'image/jpeg' })

    #         jpeg_attachments.each do |attachment|
    #         photo = photos.find { |p| p.id == attachment.id } || attachment
    #             begin
    #                 convert_single_photo(photo)
    #             rescue => e
    #                 Rails.logger.error("WebP conversion failed for photo #{attachment.id}: #{e.message}")
    #             end
    #         end
    #     ensure
    #         Thread.current[key] = nil
    #     end
    # end

    # def convert_single_photo(photo)
    #     return if photo.content_type == 'image/webp' || photo.filename.to_s.end_with?('.webp')

    #     new_filename = "#{File.basename(photo.filename.to_s, '.*')}.webp"

    #     # Query the DB directly — do NOT rely on the cached `photos` association
    #     already_exists = ActiveStorage::Attachment
    #         .joins(:blob)
    #         .where(record_type: 'Listing', record_id: id, name: 'photos')
    #         .where(active_storage_blobs: { filename: new_filename })
    #         .exists?

    #     if already_exists
    #         Rails.logger.info("WebP twin already exists for photo #{photo.id}, skipping")
    #         photo.purge_later
    #         return
    #     end

    #     photo.blob.open do |source_file|
    #         converted = ImageProcessing::Vips
    #         .source(source_file)
    #         .convert('webp')
    #         .saver(quality: 85)
    #         .call

    #         begin
    #         new_blob = ActiveStorage::Blob.create_and_upload!(
    #             io: File.open(converted.path, 'rb'),
    #             filename: new_filename,
    #             content_type: 'image/webp'
    #         )

    #         photos.attach(new_blob)
    #         ensure
    #         converted&.close!
    #         end
    #     end

    #     photo.purge_later
    # end
    
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

# [ActiveJob] [ActiveStorage::AnalyzeJob] [b18d8c99-c335-4849-a52e-3145a2e45b0f]   ActiveStorage::Blob Load (0.1ms)  SELECT "active_storage_blobs".* FROM "active_storage_blobs" WHERE "active_storage_blobs"."id" = $1 LIMIT $2  [["id", 3465], ["LIMIT", 1]]
# [ActiveJob] [ActiveStorage::AnalyzeJob] [b18d8c99-c335-4849-a52e-3145a2e45b0f] Performing ActiveStorage::AnalyzeJob (Job ID: b18d8c99-c335-4849-a52e-3145a2e45b0f) from Async(default) enqueued at 2026-09-09T21:01:27.192800000Z with arguments: #<GlobalID:0x000000010de8c4f8 @uri=#<URI::GID gid://supertrampapp/ActiveStorage::Blob/3465>>
#   S3 Storage (33.7ms) Downloaded file from key: pffv2arcxa5yct2d0bsgi5j09f6w
# WebP conversion failed for photo 3464: string contains null byte
#   S3 Storage (19.7ms) Downloaded file from key: 1bt1p7vo2asmyzpe5b0d71x2wjrl
# WebP conversion failed for photo 3465: ActiveStorage::FileNotFoundError
