@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing,
        :cancellation_policy, 
        :capacity, :country, :description, :minimum_nights, 
        :name, :on_arrival, :price, :checkin, :checkout, :lat, :lng

    #json.photoUrl url_for(listing.photos)
    json.photoUrls listing.photos.map { |file| url_for(file)}

        
    end
end