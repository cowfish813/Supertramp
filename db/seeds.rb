# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# file = open('https://supertrampapp.?region=us-west-1.amazonaws.com/<some_file>.jpg')
require 'open-uri'

User.delete_all
Listing.delete_all

u1 = User.create!(
    username: 'demo',
    password: '123456',
    email: 'demo@gmail.com',
    last_name: 'demonstration',
    first_name: 'demo'
)

u2 = User.create!(
    username: 'nick',
    password: '123456',
    email: 'Nick@gmail.com',
    last_name: 'C',
    first_name: 'Nick'
)


l1 = Listing.create!(
    name: "Gates of Gondor", 
    description: 'Gondor calls for aid',
    on_arrival: 'call for aid',
    cancellation_policy: 'strict',
    capacity: 9,
    country: "Middle Earth",
    minimum_nights: 12,
    price: 9001,
    lat: -44.478852,
    lng: 168.995349,
    host_id: u1.id
)
f1 = open('https://supertrampapp-ori.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l1.photo.attach(io: f1, filename: '17545579_10105436252223793_1168540811776764446_o.jpg' )


l2 = Listing.create!(
    name: 'Car',
    description: '5/9 overseas trips, nick lived this way because he was too tired to keep driving',
    on_arrival: 'key under 3rd wheel',
    cancellation_policy: 'yes',
    capacity: 4,
    country: "murica",
    minimum_nights: 2,
    price: 3.50,
    lat: 37.763698,
    lng: -122.472876,
    host_id: u1.id
    )
f2 = open('https://supertrampapp-ori.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
l2.photo.attach(io: f2, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')



l3 = Listing.create!(
    name: 'Whiterun',
    on_arrival: 'Ask innkeeper for Jarl Balgrif',
    description: 'Skyrim is a nice place',
    cancellation_policy: 'Lenient',
    capacity: 3,
    country: "Tamriel",
    minimum_nights: 1,
    price: 200,
    lat: 122.472876,
    lng: -12.472876,
    host_id: u1.id
)
f3 = open('https://supertrampapp-ori.s3-us-west-1.amazonaws.com/28516642_10106468836212203_4628740970091386634_o.jpg')
l3.photo.attach(io: f3, filename: '28516642_10106468836212203_4628740970091386634_o.jpg')

l4 = Listing.create!(
    name: 'Wild place',
    description: 'im running out of ideas ',
    on_arrival: 'hike 12 miles',
    cancellation_policy: 'Lenient',
    capacity: 1,
    country: "murica",
    minimum_nights: 1,
    price: 50,
    lat: 137.749073,
    lng: -119.611150,
    host_id: u1.id
)

f4 = open('https://supertrampapp-ori.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
l4.photo.attach(io: f4, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')



l5 = Listing.create!(
    name: 'Wild land',
    on_arrival: 'walk 500 miles',
    description: 'and i would walk 500 more',
    cancellation_policy: 'Proclaimers',
    capacity: 1,
    country: "murica",
    minimum_nights: 1,
    price: 500,
    lat: 15.749073,
    lng: -119.611150,
    host_id: u1.id
)

f5 = open('https://supertrampapp-ori.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
l5.photo.attach(io: f5, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')

l6 = Listing.create!(
    name: 'Piano',
    on_arrival: 'walk 1000 miles more',
    description: 'so i could just see you',
    cancellation_policy: 'vanessa carlton',
    capacity: 2,
    country: "Hyrule",
    minimum_nights: 1,
    price: 1000,
    lat: 37.749073,
    lng: -119.611150,
    host_id: u1.id
)
f6 = open('https://supertrampapp-ori.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
l6.photo.attach(io: f6, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')






