json.extract! @listing, :cancellation_policy, :capacity, :country, :description, :minimum_nights, :name, :on_arrival, :price, :checkin, :checkout, :lat, :lng

@listing.reviews.includes(:user).each do |review|
    json.reviews do
        
    end

end
