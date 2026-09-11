# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# file = URI.open('https://supertrampapp.?region=us-west-1.amazonaws.com/<some_file>.jpg')
require 'open-uri'
require 'tempfile'

ENV['SKIP_WEBP_CONVERSION'] = '1'

# Disables the WebP conversion callback — webp attached below
if Listing.respond_to?(:skip_callback)
  Listing.skip_callback(:commit, :after, :convert_photos_to_webp)
end

PHOTOS = {
  'a' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/57056162_10107436356788213_4281326518522609664_o.jpg',
  'b' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/17545579_10105436252223793_1168540811776764446_o.jpg',
  'c' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/55937490_10107418126272313_2116183051628183552_n.jpg',
  'd' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/17855640_10105438859618553_1862219686291433231_o.jpg',
  'e' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/28828057_10106502756296083_3917095514831156302_o.jpg',
  'f' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/56312133_10107420712439613_2489365651806748672_n.jpg',
  'n1' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/n1.jpg',
  'n2' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/n2.jpg',
  'n3' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/n3.jpg',
  'n4' => 'https://supertramp-mast.s3-us-west-1.amazonaws.com/n4.jpg',
}.freeze

# Helpers

# Download a JPEG from `url`, convert it to WebP locally, and attach the WebP to listing
def attach_webp(listing, url, filename_base)
  source_path = nil
  converted = nil
  begin
    source = URI.open(url)
    source_path = Tempfile.new(['source', '.jpg'])
    source_path.binmode
    IO.copy_stream(source, source_path)
    source_path.rewind

    converted = ImageProcessing::Vips
      .source(source_path.path)
      .convert('webp')
      .saver(quality: 85)
      .call

    listing.photos.attach(
      io: File.open(converted.path, 'rb'),
      filename: "#{filename_base}.webp",
      content_type: 'image/webp'
    )
  ensure
    source_path&.close!
    converted&.close!
  end
end

# Look up the URL by key, derive the filename from the URL, and attach.
def attach_photo(listing, key)
  url = PHOTOS.fetch(key)
  filename_base = File.basename(URI.parse(url).path, '.*')
  attach_webp(listing, url, filename_base)
end

Booking.delete_all
Listing.delete_all
User.delete_all

# Users
u1 = User.create!(
  username: 'master',
  password: '123456',
  email: 'Nick@gmail.com',
  last_name: 'C',
  first_name: 'Nick'
)

u2 = User.create!(
  username: 'demo',
  password: '123456',
  email: 'demo@gmail.com',
  last_name: 'demonstration',
  first_name: 'demo'
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

# Listings
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
attach_photo(l1, 'a')
attach_photo(l1, 'b')
attach_photo(l1, 'c')

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
attach_photo(l2, 'b')
attach_photo(l2, 'a')
attach_photo(l2, 'c')

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
attach_photo(l3, 'c')
attach_photo(l3, 'b')
attach_photo(l3, 'a')

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
attach_photo(l4, 'd')
attach_photo(l4, 'b')
attach_photo(l4, 'a')

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
attach_photo(l5, 'e')
attach_photo(l5, 'd')
attach_photo(l5, 'b')
attach_photo(l5, 'a')

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
attach_photo(l6, 'f')
attach_photo(l6, 'e')
attach_photo(l6, 'd')
attach_photo(l6, 'b')
attach_photo(l6, 'a')

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
attach_photo(l7, 'f')
attach_photo(l7, 'e')
attach_photo(l7, 'd')
attach_photo(l7, 'b')
attach_photo(l7, 'a')

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
attach_photo(l8, 'f')
attach_photo(l8, 'e')
attach_photo(l8, 'd')
attach_photo(l8, 'b')
attach_photo(l8, 'a')

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
attach_photo(l9, 'n4')
attach_photo(l9, 'f')
attach_photo(l9, 'e')
attach_photo(l9, 'd')
attach_photo(l9, 'b')
attach_photo(l9, 'a')

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
attach_photo(l10, 'n3')
attach_photo(l10, 'f')
attach_photo(l10, 'e')
attach_photo(l10, 'd')
attach_photo(l10, 'b')
attach_photo(l10, 'a')

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
attach_photo(l11, 'n2')
attach_photo(l11, 'f')
attach_photo(l11, 'e')
attach_photo(l11, 'd')
attach_photo(l11, 'b')
attach_photo(l11, 'a')

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
attach_photo(l12, 'n1')
attach_photo(l12, 'f')
attach_photo(l12, 'e')
attach_photo(l12, 'd')
attach_photo(l12, 'b')
attach_photo(l12, 'a')

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
attach_photo(l13, 'n1')
attach_photo(l13, 'f')
attach_photo(l13, 'e')
attach_photo(l13, 'd')
attach_photo(l13, 'b')
attach_photo(l13, 'a')

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
attach_photo(l14, 'n1')
attach_photo(l14, 'f')
attach_photo(l14, 'e')
attach_photo(l14, 'd')
attach_photo(l14, 'b')
attach_photo(l14, 'a')

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
attach_photo(l15, 'n1')
attach_photo(l15, 'f')
attach_photo(l15, 'e')
attach_photo(l15, 'd')
attach_photo(l15, 'b')
attach_photo(l15, 'a')

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
attach_photo(l16, 'n1')
attach_photo(l16, 'f')
attach_photo(l16, 'e')
attach_photo(l16, 'd')
attach_photo(l16, 'b')
attach_photo(l16, 'a')

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
attach_photo(l17, 'n1')
attach_photo(l17, 'f')
attach_photo(l17, 'e')
attach_photo(l17, 'd')
attach_photo(l17, 'b')
attach_photo(l17, 'a')

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
attach_photo(l19, 'n1')
attach_photo(l19, 'f')
attach_photo(l19, 'e')
attach_photo(l19, 'd')
attach_photo(l19, 'b')
attach_photo(l19, 'a')

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
attach_photo(l20, 'n1')
attach_photo(l20, 'f')
attach_photo(l20, 'e')
attach_photo(l20, 'd')
attach_photo(l20, 'b')
attach_photo(l20, 'a')

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
attach_photo(l21, 'n1')
attach_photo(l21, 'f')
attach_photo(l21, 'e')
attach_photo(l21, 'd')
attach_photo(l21, 'b')
attach_photo(l21, 'a')

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
attach_photo(l22, 'n1')
attach_photo(l22, 'f')
attach_photo(l22, 'e')
attach_photo(l22, 'd')
attach_photo(l22, 'b')
attach_photo(l22, 'a')

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
attach_photo(l23, 'n1')
attach_photo(l23, 'f')
attach_photo(l23, 'e')
attach_photo(l23, 'd')
attach_photo(l23, 'b')
attach_photo(l23, 'a')

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
attach_photo(l24, 'n1')
attach_photo(l24, 'f')
attach_photo(l24, 'e')
attach_photo(l24, 'd')
attach_photo(l24, 'b')
attach_photo(l24, 'a')

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
attach_photo(l25, 'n1')
attach_photo(l25, 'f')
attach_photo(l25, 'e')
attach_photo(l25, 'd')
attach_photo(l25, 'b')
attach_photo(l25, 'a')

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
attach_photo(l26, 'n1')
attach_photo(l26, 'f')
attach_photo(l26, 'e')
attach_photo(l26, 'd')
attach_photo(l26, 'b')
attach_photo(l26, 'a')

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
attach_photo(l27, 'n1')
attach_photo(l27, 'f')
attach_photo(l27, 'e')
attach_photo(l27, 'd')
attach_photo(l27, 'b')
attach_photo(l27, 'a')

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
attach_photo(l28, 'n1')
attach_photo(l28, 'f')
attach_photo(l28, 'e')
attach_photo(l28, 'd')
attach_photo(l28, 'b')
attach_photo(l28, 'a')

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
attach_photo(l29, 'n1')
attach_photo(l29, 'f')
attach_photo(l29, 'e')
attach_photo(l29, 'd')
attach_photo(l29, 'b')
attach_photo(l29, 'a')

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
attach_photo(l30, 'e')
attach_photo(l30, 'f')
attach_photo(l30, 'e')
attach_photo(l30, 'd')
attach_photo(l30, 'a')

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
attach_photo(l31, 'f')
attach_photo(l31, 'e')
attach_photo(l31, 'd')
attach_photo(l31, 'a')
attach_photo(l31, 'b')

l32 = Listing.create!(
  name: 'Mustafar',
  on_arrival: 'Tour the volcanic landscapes and visit Vader\u2019s castle',
  description: 'Mustafar is a volcanic planet known for its lava rivers and fiery terrain. It was the site of a major battle between Obi-Wan Kenobi and Anakin Skywalker. The planet later housed Darth Vader\u2019s personal fortress.',
  cancellation_policy: 'Generous',
  capacity: 4,
  country: "Outer Rim",
  minimum_nights: 1,
  price: 450,
  lat: 28.000000,
  lng: 15.000000,
  host_id: u4.id
)
attach_photo(l32, 'e')
attach_photo(l32, 'f')
attach_photo(l32, 'd')
attach_photo(l32, 'a')
attach_photo(l32, 'b')

l33 = Listing.create!(
  name: 'Asgard',
  on_arrival: 'Witness the majesty of the Bifrost and the Hall of Valhalla',
  description: 'Asgard, the realm of the gods, is a place of incredible beauty and power. It is home to the Aesir, including Odin and Thor. Visitors can explore the grandeur of the Hall of Valhalla and experience the wonders of the Bifrost bridge.',
  cancellation_policy: 'None',
  capacity: 15,
  country: "Midgard",
  minimum_nights: 1,
  price: 1200,
  lat: 35.6895,
  lng: 139.6917,
  host_id: u2.id
)
attach_photo(l33, 'f')
attach_photo(l33, 'e')
attach_photo(l33, 'd')
attach_photo(l33, 'a')
attach_photo(l33, 'b')

l34 = Listing.create!(
  name: 'Rivendell',
  on_arrival: 'Meet Elrond and enjoy the tranquility of the Last Homely House',
  description: 'Rivendell, the hidden valley of the Elves, is a sanctuary of peace and learning. It is ruled by Elrond and serves as a safe haven for travelers. The beauty of its waterfalls and the serenity of its environment make it a perfect retreat.',
  cancellation_policy: 'Flexible',
  capacity: 10,
  country: "Middle-earth",
  minimum_nights: 2,
  price: 800,
  lat: 45.0000,
  lng: 169.0000,
  host_id: u3.id
)
attach_photo(l34, 'f')
attach_photo(l34, 'e')
attach_photo(l34, 'd')
attach_photo(l34, 'a')
attach_photo(l34, 'b')

l35 = Listing.create!(
  name: 'Hogwarts',
  on_arrival: 'Join the sorting ceremony and explore the castle',
  description: 'Hogwarts School of Witchcraft and Wizardry is a magical castle filled with secrets, enchantments, and history. Students and visitors can explore the Great Hall, the Forbidden Forest, and numerous hidden passages. The castle is a place of learning, magic, and wonder.',
  cancellation_policy: 'No Muggles',
  capacity: 50,
  country: "Scotland",
  minimum_nights: 1,
  price: 1500,
  lat: 56.4907,
  lng: -4.2026,
  host_id: u4.id
)
attach_photo(l35, 'f')
attach_photo(l35, 'e')
attach_photo(l35, 'd')
attach_photo(l35, 'a')
attach_photo(l35, 'b')

# Bookings
Booking.create!(
  listing_id: l1.id,
  host_id: l1.host_id,
  user_id: u2.id,
  capacity: 1,
  check_in: Date.new(2024, 5, 20),
  check_out: Date.new(2024, 5, 29),
  price: 1000
)

Booking.create!(
  listing_id: l2.id,
  host_id: l2.host_id,
  user_id: u2.id,
  capacity: 1,
  check_in: Date.new(2024, 3, 2),
  check_out: Date.new(2024, 3, 9),
  price: 1000
)

puts "Seeded #{Listing.count} listings, #{User.count} users, #{Booking.count} bookings, #{ActiveStorage::Attachment.count} WebP photos"