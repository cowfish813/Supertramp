@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :host_id, 
        :user_id, :capacity, :listing_id, :check_in,
        :check_out, :listing_name, :price
        json.photoUrls booking.listing.photos.map { |photo| url_for(photo) }

    end
end