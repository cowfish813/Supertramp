@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing,
        :cancellation_policy, 
        :capacity, :country, :description, :minimum_nights, 
        :name, :on_arrival, :price, :checkin, :checkout, :lat, :lng

        
    end
end