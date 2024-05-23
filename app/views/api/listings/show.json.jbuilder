json.extract! @listing, :cancellation_policy, :capacity, :country, 
:description, :minimum_nights, :name, :on_arrival, :price, 
:checkin, :checkout, :lat, :lng, :id, :host_id
# json.photoUrls url_for(@listing.photos)

# json.photoUrls url_for(@listing.photos.first)
json.photoUrls @listing.photos.map { |file| url_for(file)}

json.host do
  json.id @host.id
  json.firstName @host.first_name
  json.lastName @host.last_name
  json.email @host.email
end

# @listing.reviews.includes(:user).each do |review|
#     json.reviews do
        
#     end

# end
