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

#disable open/photo.attach and it can seed....but still.
f1 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg')
l1.photo.attach(io: f1, filename: '57056162_10107436356788213_4281326518522609664_o.jpg' )


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
f2 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg')
l2.photo.attach(io: f2, filename: '17545579_10105436252223793_1168540811776764446_o.jpg')



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
f3 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/55937490_10107418126272313_2116183051628183552_n.jpg')
l3.photo.attach(io: f3, filename: '55937490_10107418126272313_2116183051628183552_n.jpg')

l4 = Listing.create!(
    name: 'Wild place',
    description: 'A cozy, no fuss, home away from home. Experience glamping in your own private nook of the woods in a wall tent. Complete with your own dresser, armoire, queen size bed, tables and chairs. All you need to do is bring your pajamas! Realize that this is still "rustic" in the sense there is no electricity and no running water. ',
    on_arrival: 'hike 2 miles',
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
    on_arrival: 'await host',
    description: 'Our brand new, wonderful listing at Music Springs is The Schoolhouse! Created like an old, tiny one room schoolhouse, this space is cozy, romantic and perfect for a couple wanting to get away for a night, a weekend or a week!',
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
    description: 'an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion, and was released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360 on November 11, 2011. ',
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


l7 = Listing.create!(
    name: 'Sovngarde',
    on_arrival: 'Battle Alduin',
    description: '"It is time for Nords to learn the truth. Eternal life can be theirs, without the need to spend an entire mortal life in vain pursuit of something completely unattainable. In the end, all valiant Nords can enter Sovngarde. Dismemberment, decapitation or evisceration seems a small price to pay for the chance to spend an eternity in Shors wondrous hall."',
    cancellation_policy: 'Defeat Alduin',
    capacity: 2,
    country: "Hyrule",
    minimum_nights: 1,
    price: 1000,
    lat: 29.402911,
    lng: 30.882080,
    host_id: u1.id
)
f7 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg')
l7.photo.attach(io: f7, filename: '56312133_10107420712439613_2489365651806748672_n.jpg')


l8 = Listing.create!(
    name: 'Utapau',
    on_arrival: 'Find General Grievous, end the Clone Wars',
    description: 'a remote and rocky planet in the Outer Rim Territories Utapau system that was filled with enormous sinkholes. Its native inhabitants were the Pauans and the Utai, while tribes of Amani also immigrated to the world. It was the location of the Battle of Utapau during the Clone Wars. ',
    cancellation_policy: 'Generous',
    capacity: 1,
    country: "murica",
    minimum_nights: 1,
    price: 500,
    lat: 29.342041,
    lng: 31.186808,
    host_id: u1.id
)

f8 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg')
l8.photo.attach(io: f8, filename: '28828057_10106502756296083_3917095514831156302_o.jpg')


l9 = Listing.create!(
    name: 'Mustafar',
    on_arrival: 'bring water',
    description: 'Mustafar is not like other plances. It is unique. Deep beneath its surface rests a locus for the Dark side of the Force.',
    cancellation_policy: 'Strict',
    capacity: 1,
    country: "murica",
    minimum_nights: 1,
    price: 500,
    lat: 29.283921,
    lng: 41.657576,
    host_id: u1.id
)

f9 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n4.jpg')
l9.photo.attach(io: f9, filename: 'n4.jpg')


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

f10 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n3.jpg')
l10.photo.attach(io: f10, filename: 'n3.jpg')

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
f11 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n2.jpg')
l11.photo.attach(io: f11, filename: 'n2.jpg')

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
f12 = open('https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg')
l12.photo.attach(io: f12, filename: 'n1.jpg')