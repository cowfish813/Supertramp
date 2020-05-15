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
Booking.delete_all

u2 = User.create!(
    username: 'demo',
    password: '123456',
    email: 'demo@gmail.com',
    last_name: 'demonstration',
    first_name: 'demo'
)

u1 = User.create!(
    username: 'master',
    password: '123456',
    email: 'Nick@gmail.com',
    last_name: 'C',
    first_name: 'Nick'
)


l1 = Listing.create!(
    name: "Tamriel", 
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    on_arrival: 'call for aid',
    cancellation_policy: 'strict',
    capacity: 9,
    country: "Middle Earth",
    minimum_nights: 2,
    price: 75,
    lat: 37.740587,
    lng: -119.598207,
    host_id: u1.id
)

#disable open/photo.attach and it can seed....but still.
f1 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
l1.photo.attach(io: f1, filename: '57056162_10107436356788213_4281326518522609664_o.jpg' )


l2 = Listing.create!(
    name: 'Wild tent',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    on_arrival: 'key under 3rd wheel',
    cancellation_policy: 'yes',
    capacity: 4,
    country: "murica",
    minimum_nights: 2,
    price: 3.50,
    lat: 37.7489428,
    lng: -119.5862533,
    host_id: u1.id
    )
f2 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l2.photo.attach(io: f2, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')



l3 = Listing.create!(
    name: 'Whiterun',
    on_arrival: 'Ask innkeeper for Jarl Balgrif',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    cancellation_policy: 'Lenient',
    capacity: 3,
    country: "Tamriel",
    minimum_nights: 1,
    price: 200,
    lat: 37.746723,
    lng: -119.6007142
    host_id: u1.id
)
f3 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/55937490_10107418126272313_2116183051628183552_n.jpg')
l3.photo.attach(io: f3, filename: '55937490_10107418126272313_2116183051628183552_n.jpg')

l4 = Listing.create!(
    name: 'Wild place',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    on_arrival: 'hike 12 miles',
    cancellation_policy: 'Lenient',
    capacity: 1,
    country: "murica",
    minimum_nights: 1,
    price: 50,
    lat: 38.624601,
    lng: -106.280383,
    host_id: u1.id
)

f4 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
l4.photo.attach(io: f4, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')



l5 = Listing.create!(
    name: 'Wild land',
    on_arrival: 'walk 500 miles',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    cancellation_policy: 'Proclaimers',
    capacity: 1,
    country: "murica",
    minimum_nights: 1,
    price: 500,
    lat: -17.59325,
    lng: 138.91744,
    host_id: u1.id
)

f5 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
l5.photo.attach(io: f5, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')

l6 = Listing.create!(
    name: 'Skyrim',
    on_arrival: 'walk 1000 miles more',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    cancellation_policy: 'vanessa carlton',
    capacity: 2,
    country: "Hyrule",
    minimum_nights: 1,
    price: 1000,
    lat: 40.50039,
    lng: 29.22590,
    host_id: u1.id
)
f6 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
l6.photo.attach(io: f6, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')


# give new names/etc
l7 = Listing.create!(
    name: 'Sovengarde',
    on_arrival: 'walk 1000 miles more',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    cancellation_policy: 'Defeat Alduin',
    capacity: 2,
    country: "Hyrule",
    minimum_nights: 1,
    price: 1000,
    lat: 40.50039,
    lng: 29.22590,
    host_id: u1.id
)
f7 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
l7.photo.attach(io: f7, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')


