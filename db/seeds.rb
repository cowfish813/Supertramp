# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# file = URI.open('https://supertrampapp.?region=us-west-1.amazonaws.com/<some_file>.jpg')
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

u3 = User.create!(
    username: 'Test',
    password: '123456',
    email: 'test@gmail.com',
    last_name: 'Case',
    first_name: 'Test'
)

u4 = User.create!(
    username: 'Rex',
    password: '123456',
    email: 'rex@gmail.com',
    last_name: 'Fett',
    first_name: 'Rex'
)

l1 = Listing.create!(
    name: "Gondor", 
    description: 'a fictional kingdom in J. R. R. Tolkiens writings, described as the greatest realm of Men in the west of Middle-earth at the end of the Third Age. The third volume of The Lord of the Rings, The Return of the King, is largely concerned with the events in Gondor during the War of the Ring and with the restoration of the realm afterward. The history of the kingdom is outlined in the appendices of the book. ',
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
f1 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f2 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
f3 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/55937490_10107418126272313_2116183051628183552_n.jpg')
l1.photos.attach(io: f1, filename: '57056162_10107436356788213_4281326518522609664_o.jpg' )
l1.photos.attach(io: f2, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l1.photos.attach(io: f3, filename: '55937490_10107418126272313_2116183051628183552_n.jpg')

l2 = Listing.create!(
    name: 'Wild tent',
    description: 'Located next to the spot where the original settlers chose to build their new life, Richardson Creek Campsite is ideally located under trees just a short walk to the river. Fire pit, picnic table, pit outhouse, potable water (100 yards away by barn) make your stay more enjoyable. Come spend a weekend under the trees and relaxing creek-side! ',
    on_arrival: 'free to enter tent',
    cancellation_policy: 'yes',
    capacity: 4,
    country: "murica",
    minimum_nights: 2,
    price: 3.50,
    lat: 37.7489428,
    lng: -119.5862533,
    host_id: u1.id
    )

f22 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
f21 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f23 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/55937490_10107418126272313_2116183051628183552_n.jpg')
l2.photos.attach(io: f22, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l2.photos.attach(io: f21, filename: '57056162_10107436356788213_4281326518522609664_o.jpg' )
l2.photos.attach(io: f23, filename: '55937490_10107418126272313_2116183051628183552_n.jpg')



l3 = Listing.create!(
    name: 'Whiterun',
    on_arrival: 'Ask for Balgrif',
    description: '"The Plains District of Whiterun is home to the citys shops and market, while the Wind District is mostly a residential district. The Jarls palace, Dragonsreach, dominates the Cloud District.',
    cancellation_policy: 'Lenient',
    capacity: 3,
    country: "Tamriel",
    minimum_nights: 1,
    price: 200,
    lat: 37.746723,
    lng: -119.6007142,
    host_id: u1.id
)
f33 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/55937490_10107418126272313_2116183051628183552_n.jpg')
f31 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f32 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l3.photos.attach(io: f33, filename: '55937490_10107418126272313_2116183051628183552_n.jpg')
l3.photos.attach(io: f32, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l3.photos.attach(io: f31, filename: '57056162_10107436356788213_4281326518522609664_o.jpg' )


l4 = Listing.create!(
    name: 'Wild place',
    description: 'A cozy, no fuss, home away from home. Experience glamping in your own private nook of the woods in a wall tent. Complete with your own dresser, armoire, queen size bed, tables and chairs. All you need to do is bring your pajamas! Realize that this is still "rustic" in the sense there is no electricity and no running water. ',
    on_arrival: 'hike 2 miles',
    cancellation_policy: 'Lenient',
    capacity: 3,
    country: "murica",
    minimum_nights: 8,
    price: 50,
    lat: 38.624601,
    lng: -106.280383,
    host_id: u1.id
)

f4 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f41 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f42 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l4.photos.attach(io: f4, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l4.photos.attach(io: f42, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l4.photos.attach(io: f41, filename: '57056162_10107436356788213_4281326518522609664_o.jpg' )


l5 = Listing.create!(
    name: 'Wild land',
    on_arrival: 'await host',
    description: 'Our brand new, wonderful listing at Music Springs is The Schoolhouse! Created like an old, tiny one room schoolhouse, this space is cozy, romantic and perfect for a couple wanting to get away for a night, a weekend or a week!',
    cancellation_policy: 'Proclaimers',
    capacity: 10,
    country: "murica",
    minimum_nights: 1,
    price: 500,
    lat: -17.59325,
    lng: 138.91744,
    host_id: u1.id
)

f5 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f54 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f51 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f52 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l5.photos.attach(io: f5, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l5.photos.attach(io: f54, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l5.photos.attach(io: f52, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l5.photos.attach(io: f51, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')


l6 = Listing.create!(
    name: 'Skyrim',
    on_arrival: 'walk 1000 miles more',
    description: 'an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion, and was released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360 on November 11, 2011. ',
    cancellation_policy: 'vanessa carlton',
    capacity: 5,
    country: "Hyrule",
    minimum_nights: 1,
    price: 1000,
    lat: 40.50039,
    lng: 29.22590,
    host_id: u1.id
)
f6 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f65 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f64 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f61 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f62 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l6.photos.attach(io: f6, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l6.photos.attach(io: f65, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l6.photos.attach(io: f64, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l6.photos.attach(io: f62, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l6.photos.attach(io: f61, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l7 = Listing.create!(
    name: 'Sovngarde',
    on_arrival: 'Battle Alduin',
    description: '"It is time for Nords to learn the truth. Eternal life can be theirs, without the need to spend an entire mortal life in vain pursuit of something completely unattainable. In the end, all valiant Nords can enter Sovngarde. Dismemberment, decapitation or evisceration seems a small price to pay for the chance to spend an eternity in Shors wondrous hall."',
    cancellation_policy: 'Defeat Alduin',
    capacity: 20,
    country: "Hyrule",
    minimum_nights: 1,
    price: 1000,
    lat: 29.402911,
    lng: 30.882080,
    host_id: u1.id
)
f7 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
l7.photos.attach(io: f7, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
f76 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f75 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f74 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f71 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f72 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l7.photos.attach(io: f76, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l7.photos.attach(io: f75, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l7.photos.attach(io: f74, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l7.photos.attach(io: f72, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l7.photos.attach(io: f71, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l8 = Listing.create!(
    name: 'Utapau',
    on_arrival: 'Find General Grievous, end the Clone Wars',
    description: 'a remote and rocky planet in the Outer Rim Territories Utapau system that was filled with enormous sinkholes. Its native inhabitants were the Pauans and the Utai, while tribes of Amani also immigrated to the world. It was the location of the Battle of Utapau during the Clone Wars. ',
    cancellation_policy: 'Generous',
    capacity: 5,
    country: "murica",
    minimum_nights: 1,
    price: 500,
    lat: 29.342041,
    lng: 31.186808,
    host_id: u1.id
)

f8 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
l8.photos.attach(io: f8, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
f86 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f85 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f84 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f81 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f82 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l8.photos.attach(io: f86, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l8.photos.attach(io: f85, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l8.photos.attach(io: f84, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l8.photos.attach(io: f82, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l8.photos.attach(io: f81, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l9 = Listing.create!(
    name: 'Mustafar',
    on_arrival: 'bring water',
    description: 'Mustafar is not like other plances. It is unique. Deep beneath its surface rests a locus for the Dark side of the Force.',
    cancellation_policy: 'Strict',
    capacity: 7,
    country: "murica",
    minimum_nights: 1,
    price: 500,
    lat: 29.283921,
    lng: 41.657576,
    host_id: u1.id
)

f9 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n4.jpg')
l9.photos.attach(io: f9, filename: 'n4.jpg')
f96 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f95 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f94 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f91 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f92 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l9.photos.attach(io: f96, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l9.photos.attach(io: f95, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l9.photos.attach(io: f94, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l9.photos.attach(io: f92, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l9.photos.attach(io: f91, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')


l10 = Listing.create!(
    name: 'Naboo',
    description: '"Naboo represents the best of the Old Republic.',
    on_arrival: 'speak Gungan and enter',
    cancellation_policy: 'Lenient',
    capacity: 1,
    country: "murica",
    minimum_nights: 1,
    price: 50,
    lat: 34.910977, 
    lng: 137.250385,
    host_id: u1.id
)

f10 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n3.jpg')
l10.photos.attach(io: f10, filename: 'n3.jpg')
f106 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f105 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f104 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f101 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f102 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l10.photos.attach(io: f106, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l10.photos.attach(io: f105, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l10.photos.attach(io: f104, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l10.photos.attach(io: f102, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l10.photos.attach(io: f101, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l11 = Listing.create!(
    name: 'Kamino',
    description: 'Pitch your tent on the banks of the mighty Llano River in the Texas Hill Country. Fire pits, privacy, picnic tables, and gorgeous views. Explore over 15 acres of hill country beauty. Take a casual dip in the mighty Llano River, or take the plunge off of 20 foot red rock cliffs into deep cool water',
    on_arrival: 'Good Soldiers follow Orders',
    cancellation_policy: 'yes',
    capacity: 4,
    country: "murica",
    minimum_nights: 2,
    price: 3.50,
    lat: 28.104445,
    lng: 85.390785,
    host_id: u4.id
    )
f11 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n2.jpg')
l11.photos.attach(io: f11, filename: 'n2.jpg')
f116 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f115 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f114 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f111 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f112 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l11.photos.attach(io: f116, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l11.photos.attach(io: f115, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l11.photos.attach(io: f114, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l11.photos.attach(io: f112, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l11.photos.attach(io: f111, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l12 = Listing.create!(
    name: 'Felucia',
    on_arrival: 'enter main gate',
    description: 'Camp next to a Lake in either a tent or a cave. Enjoy hiking trails, swimming, boating, and fishing on the lake. Rock cabins also available by the night. Children age 5 and under are free.',
    cancellation_policy: 'Lenient',
    capacity: 3,
    country: "Tamriel",
    minimum_nights: 1,
    price: 200,
    lat: 28.063869,
    lng: 85.277814,
    host_id: u4.id
)
f12 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l12.photos.attach(io: f12, filename: 'n1.jpg')
f126 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f125 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f124 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f121 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f122 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l12.photos.attach(io: f126, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l12.photos.attach(io: f125, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l12.photos.attach(io: f124, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l12.photos.attach(io: f122, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l12.photos.attach(io: f121, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l13 = Listing.create!(
  name: 'Rivendell Retreat',
  on_arrival: 'check in at the reception desk',
  description: 'Nestled in the lush valleys of Rivendell, this retreat offers a peaceful sanctuary. Stay in cozy elven lodges or treehouses. Explore enchanted forests, meditate by the river, and indulge in elven feasts. All ages welcome!',
  cancellation_policy: 'Moderate',
  capacity: 4,
  country: "Middle-earth",
  minimum_nights: 2,
  price: 300,
  lat: 45.326789,
  lng: -73.438967,
  host_id: u3.id
)

f13 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l13.photos.attach(io: f13, filename: 'photos.jpg')
f136 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f135 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f134 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f131 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f132 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l13.photos.attach(io: f136, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l13.photos.attach(io: f135, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l13.photos.attach(io: f134, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l13.photos.attach(io: f132, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l13.photos.attach(io: f131, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')


l14 = Listing.create!(
  name: 'Aurora Glamping',
  on_arrival: 'check in at the reception tent',
  description: 'Experience the magic of the Northern Lights in comfort. Stay in luxurious transparent igloos, watch the Aurora Borealis, and enjoy hot cocoa by the fire. Guided tours and husky sledding available!',
  cancellation_policy: 'Strict',
  capacity: 2,
  country: "Narnia",
  minimum_nights: 3,
  price: 500,
  lat: 63.446827,
  lng: 27.855110,
  host_id: u1.id
)

f14 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l14.photos.attach(io: f14, filename: 'photo14.jpg')
f146 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f145 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f144 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f141 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f142 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l14.photos.attach(io: f146, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l14.photos.attach(io: f145, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l14.photos.attach(io: f144, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l14.photos.attach(io: f142, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l14.photos.attach(io: f141, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l15 = Listing.create!(
  name: 'Atlantis Underwater Retreat',
  on_arrival: 'take the underwater elevator',
  description: 'Dive into the ocean\'s depths and stay in an underwater haven. Witness marine life up close, sleep surrounded by colorful fish, and enjoy subaquatic adventures. Suitable for divers and ocean enthusiasts!',
  cancellation_policy: 'Flexible',
  capacity: 2,
  country: "Atlantis",
  minimum_nights: 4,
  price: 800,
  lat: -32.716264,
  lng: -62.382932,
  host_id: u2.id
)

f15 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l15.photos.attach(io: f15, filename: 'photo15.jpg')
f156 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f155 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f154 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f151 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f152 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l15.photos.attach(io: f156, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l15.photos.attach(io: f155, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l15.photos.attach(io: f154, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l15.photos.attach(io: f152, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l15.photos.attach(io: f151, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l16 = Listing.create!(
  name: 'Mystic Forest Treehouse',
  on_arrival: 'follow the lantern-lit path',
  description: 'Escape to the heart of an ancient forest and sleep among the treetops. Cozy treehouses offer serenity and enchanting views. Explore the forest, stargaze, and reconnect with nature.',
  cancellation_policy: 'Moderate',
  capacity: 2,
  country: "Eldoria",
  minimum_nights: 2,
  price: 350,
  lat: 42.643076,
  lng: -73.785877,
  host_id: u2.id
)

f16 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l16.photos.attach(io: f16, filename: 'photo16.jpg')
f166 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f165 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f164 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f161 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f162 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l16.photos.attach(io: f166, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l16.photos.attach(io: f165, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l16.photos.attach(io: f164, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l16.photos.attach(io: f162, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l16.photos.attach(io: f161, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l17 = Listing.create!(
  name: 'Skyline Penthouse Retreat',
  on_arrival: 'take the private elevator to the top',
  description: 'Indulge in luxury at a stunning penthouse with breathtaking city views. Enjoy modern amenities, a private pool, and rooftop parties. Ideal for city explorers and those seeking luxury.',
  cancellation_policy: 'Strict',
  capacity: 6,
  country: "Metropolis",
  minimum_nights: 1,
  price: 1200,
  lat: 40.712776,
  lng: -74.005974,
  host_id: u3.id
)

f17 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l17.photos.attach(io: f17, filename: 'photo17.jpg')
f176 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f175 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f174 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f171 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f172 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l17.photos.attach(io: f176, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l17.photos.attach(io: f175, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l17.photos.attach(io: f174, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l17.photos.attach(io: f172, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l17.photos.attach(io: f171, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l19 = Listing.create!(
  name: 'Enchanted Castle Retreat',
  on_arrival: 'announce yourself at the grand gate',
  description: 'Live like royalty in a magical castle surrounded by beautiful gardens. Enjoy lavish banquets, ballroom dances, and guided tours of the castle. Perfect for fairy tale enthusiasts!',
  cancellation_policy: 'Moderate',
  capacity: 8,
  country: "Fantasia",
  minimum_nights: 2,
  price: 700,
  lat: 51.5074,
  lng: -0.1278,
  host_id: u4.id
)

f19 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l19.photos.attach(io: f19, filename: 'photo19.jpg')
f196 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f195 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f194 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f191 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f192 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l19.photos.attach(io: f196, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l19.photos.attach(io: f195, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l19.photos.attach(io: f194, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l19.photos.attach(io: f192, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l19.photos.attach(io: f191, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l20 = Listing.create!(
  name: 'Serenity Cabin by the Lake',
  on_arrival: 'find the cabin by the water\'s edge',
  description: 'Escape the hustle and bustle in a cozy cabin by a tranquil lake. Enjoy fishing, kayaking, and bonfires by the lake. Perfect for nature lovers seeking peace and quiet.',
  cancellation_policy: 'Flexible',
  capacity: 4,
  country: "Avalon",
  minimum_nights: 2,
  price: 250,
  lat: 35.6895,
  lng: 139.6917,
  host_id: u1.id
)

f20 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l20.photos.attach(io: f20, filename: 'photo20.jpg')
f206 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f205 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f204 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f201 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f202 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l20.photos.attach(io: f206, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l20.photos.attach(io: f205, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l20.photos.attach(io: f204, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l20.photos.attach(io: f202, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l20.photos.attach(io: f201, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l21 = Listing.create!(
  name: 'Galactic Space Station Adventure',
  on_arrival: 'prepare for launch at the spaceport',
  description: 'Embark on a journey to space and live aboard a space station. Experience simulated spacewalks, enjoy space-themed meals, and stargaze from the observation deck. Ideal for space enthusiasts!',
  cancellation_policy: 'Strict',
  capacity: 2,
  country: "Galaxy X",
  minimum_nights: 5,
  price: 1500,
  lat: -23.5505,
  lng: -46.6333,
  host_id: u2.id
)

f21 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l21.photos.attach(io: f21, filename: 'photo21.jpg')
f216 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f215 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f214 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f211 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f212 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l21.photos.attach(io: f216, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l21.photos.attach(io: f215, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l21.photos.attach(io: f214, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l21.photos.attach(io: f212, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l21.photos.attach(io: f211, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l22 = Listing.create!(
  name: 'Tropical Beach Bungalow',
  on_arrival: 'check in at the beachfront reception',
  description: 'Unwind in a private bungalow nestled on a tropical beach. Relax by the ocean, indulge in water sports, and watch stunning sunsets. Ideal for beach lovers and relaxation seekers.',
  cancellation_policy: 'Moderate',
  capacity: 2,
  country: "Paradisia",
  minimum_nights: 3,
  price: 400,
  lat: -8.7832,
  lng: -55.4915,
  host_id: u4.id
)

f22 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l22.photos.attach(io: f22, filename: 'photo22.jpg')
f226 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f225 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f224 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f221 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f222 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l22.photos.attach(io: f226, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l22.photos.attach(io: f225, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l22.photos.attach(io: f224, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l22.photos.attach(io: f222, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l22.photos.attach(io: f221, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l23 = Listing.create!(
  name: 'Arctic Wilderness Lodge',
  on_arrival: 'bundle up and check in at the lodge',
  description: 'Immerse yourself in the Arctic wilderness in a cozy lodge. Witness the Northern Lights, go snowmobiling, and experience dog sledding adventures. Perfect for winter enthusiasts!',
  cancellation_policy: 'Lenient',
  capacity: 6,
  country: "Arctica",
  minimum_nights: 4,
  price: 600,
  lat: 64.2008,
  lng: -149.4937,
  host_id: u1.id
)

f23 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l23.photos.attach(io: f23, filename: 'photo23.jpg')
f236 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f235 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f234 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f231 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f232 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l23.photos.attach(io: f236, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l23.photos.attach(io: f235, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l23.photos.attach(io: f234, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l23.photos.attach(io: f232, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l23.photos.attach(io: f231, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l24 = Listing.create!(
  name: 'Yosemite Valley Retreat',
  on_arrival: 'Check in at our cozy retreat nestled in the heart of Yosemite Valley.',
  description: 'Escape to the tranquility of Yosemite Valley in our charming retreat. Enjoy breathtaking views of iconic landmarks such as El Capitan and Half Dome. Hike through ancient sequoia groves, explore cascading waterfalls, and spot diverse wildlife.',
  cancellation_policy: 'Moderate',
  capacity: 4,
  country: 'United States',
  minimum_nights: 2,
  price: 300,
  lat: 37.7456,
  lng: -119.5936,
  host_id: u1.id
)

f24 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l24.photos.attach(io: f24, filename: 'photo24.jpg')

f246 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f245 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f244 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f241 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f242 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l24.photos.attach(io: f246, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l24.photos.attach(io: f245, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l24.photos.attach(io: f244, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l24.photos.attach(io: f242, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l24.photos.attach(io: f241, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')


l25 = Listing.create!(
  name: 'Sierra Cabin Oasis',
  on_arrival: 'Arrive at our rustic cabin oasis and immerse yourself in the tranquility of the Sierra Nevada mountains.',
  description: 'Experience the ultimate mountain getaway in our charming cabin oasis. Nestled amidst towering pine trees, our cabin offers a peaceful retreat with stunning views of Yosemite Valley. Enjoy hiking, rock climbing, and wildlife spotting during the day, and cozy up by the fireplace under the starry night sky.',
  cancellation_policy: 'Flexible',
  capacity: 5,
  country: 'United States',
  minimum_nights: 3,
  price: 250,
  lat: 37.7338,
  lng: -119.5664,
  host_id: u1.id
)

f25 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l25.photos.attach(io: f25, filename: 'photo25.jpg')

f256 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f255 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f254 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f251 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f252 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l25.photos.attach(io: f256, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l25.photos.attach(io: f255, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l25.photos.attach(io: f254, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l25.photos.attach(io: f252, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l25.photos.attach(io: f251, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l26 = Listing.create!(
  name: 'Yosemite Meadow Lodge',
  on_arrival: 'Check in at our charming lodge nestled in the picturesque Yosemite meadows.',
  description: 'Experience the beauty of Yosemite National Park from our cozy lodge in the meadows. Surrounded by wildflowers and majestic peaks, our lodge offers a peaceful retreat with access to hiking trails, fishing streams, and star-gazing opportunities. Unwind in nature and create unforgettable memories with your loved ones.',
  cancellation_policy: 'Moderate',
  capacity: 6,
  country: 'United States',
  minimum_nights: 2,
  price: 350,
  lat: 37.7272,
  lng: -119.5886,
  host_id: u1.id
)

f26 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l26.photos.attach(io: f26, filename: 'photo26.jpg')

f266 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f265 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f264 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f261 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f262 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l26.photos.attach(io: f266, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l26.photos.attach(io: f265, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l26.photos.attach(io: f264, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l26.photos.attach(io: f262, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l26.photos.attach(io: f261, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')


l27 = Listing.create!(
  name: 'El Capitan Hideaway',
  on_arrival: 'Discover our secluded hideaway nestled beneath the iconic El Capitan.',
  description: 'Escape the hustle and bustle of everyday life and retreat to our hidden gem beneath El Capitan. Our cozy cabin offers a peaceful sanctuary with breathtaking views of the granite cliffs. Explore nearby hiking trails, picnic by the Merced River, and witness stunning sunsets over the valley. Experience the magic of Yosemite in comfort and style.',
  cancellation_policy: 'Strict',
  capacity: 4,
  country: 'United States',
  minimum_nights: 4,
  price: 400,
  lat: 37.7322,
  lng: -119.6372,
  host_id: u1.id
)

f27 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l27.photos.attach(io: f27, filename: 'photo27.jpg')

f276 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f275 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f274 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f271 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f272 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l27.photos.attach(io: f276, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l27.photos.attach(io: f275, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l27.photos.attach(io: f274, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l27.photos.attach(io: f272, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l27.photos.attach(io: f271, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')



l28 = Listing.create!(
  name: 'Half Dome Haven',
  on_arrival: 'Arrive at our tranquil haven beneath the towering Half Dome.',
  description: 'Experience the awe-inspiring beauty of Half Dome from our peaceful haven in Yosemite Valley. Our comfortable cabin offers panoramic views of the granite monolith and easy access to hiking trails, rock climbing routes, and scenic viewpoints. Relax on the deck, soak in the beauty of nature, and create lasting memories with family and friends.',
  cancellation_policy: 'Flexible',
  capacity: 3,
  country: 'United States',
  minimum_nights: 2,
  price: 280,
  lat: 37.7320,
  lng: -119.5589,
  host_id: u1.id
)

f28 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l28.photos.attach(io: f28, filename: 'photo28.jpg')

f286 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f285 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f284 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f281 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f282 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l28.photos.attach(io: f286, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l28.photos.attach(io: f285, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l28.photos.attach(io: f284, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l28.photos.attach(io: f282, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l28.photos.attach(io: f281, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')


l29 = Listing.create!(
  name: 'Yosemite Falls Retreat',
  on_arrival: 'Check in at our charming retreat overlooking the majestic Yosemite Falls.',
  description: 'Indulge in the beauty of Yosemite National Park from our idyllic retreat near Yosemite Falls. Wake up to the soothing sounds of cascading water and enjoy panoramic views of the valley from your private balcony. Explore nearby hiking trails, marvel at the beauty of the falls, and unwind in the serenity of nature. Your perfect Yosemite getaway awaits!',
  cancellation_policy: 'Moderate',
  capacity: 2,
  country: 'United States',
  minimum_nights: 2,
  price: 320,
  lat: 37.7555,
  lng: -119.5974,
  host_id: u1.id
)

f29 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l29.photos.attach(io: f29, filename: 'photo29.jpg')

f296 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f295 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f294 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f291 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f292 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l29.photos.attach(io: f296, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l29.photos.attach(io: f295, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l29.photos.attach(io: f294, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l29.photos.attach(io: f292, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')
l29.photos.attach(io: f291, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l30 = Listing.create!(
    name: 'Tatooine',
    on_arrival: 'Visit the Lars Homestead and watch the twin sunset',
    description: 'A desert planet in the Outer Rim Territories, Tatooine is known for its harsh climate and twin suns. It is the homeworld of Anakin and Luke Skywalker. The planet features vast stretches of desert, bustling spaceports, and dangerous Tusken Raider territories.',
    cancellation_policy: 'Moderate',
    capacity: 6,
    country: "Outer Rim",
    minimum_nights: 3,
    price: 400,
    lat: 32.000000,
    lng: 10.000000,
    host_id: u3.id
)

f10_1 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f10_2 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f10_3 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f10_4 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f10_5 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')

l30.photos.attach(io: f10_1, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l30.photos.attach(io: f10_2, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l30.photos.attach(io: f10_3, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l30.photos.attach(io: f10_4, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l30.photos.attach(io: f10_5, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')

l31 = Listing.create!(
    name: 'Endor',
    on_arrival: 'Explore the Ewok Village and visit the Imperial bunker',
    description: 'Endor, also known as the Forest Moon of Endor, is covered in dense woodlands, tall trees, and a variety of wildlife. The Ewoks inhabit this lush moon, which was the site of the pivotal Battle of Endor during the Galactic Civil War.',
    cancellation_policy: 'Strict',
    capacity: 8,
    country: "Endor System",
    minimum_nights: 2,
    price: 600,
    lat: 30.000000,
    lng: 30.000000,
    host_id: u4.id
)

f11_1 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f11_2 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f11_3 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f11_4 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f11_5 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l31.photos.attach(io: f11_1, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l31.photos.attach(io: f11_2, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l31.photos.attach(io: f11_3, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l31.photos.attach(io: f11_4, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')
l31.photos.attach(io: f11_5, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')

l32 = Listing.create!(
    name: 'Mustafar',
    on_arrival: 'Tour the volcanic landscapes and visit Vader’s castle',
    description: 'Mustafar is a volcanic planet known for its lava rivers and fiery terrain. It was the site of a major battle between Obi-Wan Kenobi and Anakin Skywalker. The planet later housed Darth Vader’s personal fortress.',
    cancellation_policy: 'Generous',
    capacity: 4,
    country: "Outer Rim",
    minimum_nights: 1,
    price: 450,
    lat: 28.000000,
    lng: 15.000000,
    host_id: u5.id
)

f12_1 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
f12_2 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
f12_3 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg')
f12_4 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
f12_5 = URI.open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l32.photos.attach(io: f12_1, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')
l32.photos.attach(io: f12_2, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')
l32.photos.attach(io: f12_3, filename: '17855640_10105438859618553_1862219686291433231_o.jpg')
l32.photos.attach(io: f12_4, filename: '57056162_10107436356788213_4281326518522609664_o.jpg')
l32.photos.attach(io: f12_5, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')