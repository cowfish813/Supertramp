#  SuperTramp

SuperTramp is a HipCamp clone web app that allows users to rent out various available locations and share their experiences

[Live Link](https://supertrampapp.herokuapp.com/)
![Intro](./public/homepage.png)

Technologies
--------------
* Ruby on Rails
* Active Storage
* React
* Redux
* WebP
* AJAX
* PostgreSQL
* AWS
* Google Maps
* Google Places Autocomplete
* HTML5
* CSS3/SCSS
* GitHub
* Heroku

### Features
--------------
## User Authentication
User Auth was created using BCrypt on rails backend
* User can Sign Up/Sign In/ Sign Out
* Users may Demo the application
* Certain features are available specifically to User including reservations and reviews.

## Animations
* Sign In/Sign Up Modals slide into place
<!-- ![Login](https://supertramp-mast.s3-us-west-1.amazonaws.com/login+animation.gif) -->

![Signup](https://supertramp-mast.s3-us-west-1.amazonaws.com/signup+animation.gif)

* Predetermined List tiles move upon mouse hover

## Google Places Autocomplete
* Completes partial or completed search terms
![short bar](https://supertramp-mast.s3-us-west-1.amazonaws.com/Google+places+ac.png)

<!-- ![long bar](https://supertramp-mast.s3-us-west-1.amazonaws.com/full+search+bar.png) -->

* Passes props to next component on unique URLs
```
    handleSubmit(e) {
        e.preventDefault();

        this.props.receiveLocation(this.state);
        this.props.history.push({
            pathname: `/search/${this.state.lat},${this.state.lng}`,
            state: this.state
        });
    }

    componentDidMount() {
        let input = document.getElementById('splash_search');
        let autocomplete = new google.maps.places.Autocomplete(input);

        let mapLocation;
        let that = this;
        autocomplete.addListener('place_changed', () => {
            let address = autocomplete.getPlace().formatted_address;
            let place = autocomplete.getPlace();

            let lat = place.geometry.location.lat();
            let lng = place.geometry.location.lng();
            mapLocation = address ? address : autocomplete.getPlace().name;
            that.setState({
                mapLocation: autocomplete.getPlace().name,
                lat: lat,
                lng: lng
            });
        });   
    }
```
## Identify locations nearby geocoordinates and the user
![Nearby Listings](./public/nearbyListings.png)
```
    def self.nearby(lat:, lng:, radius_miles:50)
        where.not(lat:nil, lng:nil)
        #3959 is earth radius in miles
            .select("listings.*, (
                3959 * acos(
                    cos(radians(#{lat.to_f})) * cos(radians(listings.lat)) *
                    cos(radians(listings.lng) - radians(#{lng.to_f})) + 
                    sin(radians(#{lat.to_f})) * sin(radians(listings.lat))
                )
            ) AS distance") #  compute distance from user to each listing
            .where(
                "3959 * acos(
                    cos(radians(?)) * cos(radians(listings.lat)) *
                    cos(radians(listings.lng) - radians(?)) +
                    sin(radians(?)) * sin(radians(listings.lat))
                ) <= ?", lat.to_f, lng.to_f, lat.to_f, radius_miles
            ) # keep listings that are within the radius
            .order("distance ASC") #
    end
```
## Rerendering Error animation
![Error Slide](./public/errorRecording.mov)
```
    useEffect(() => {
        if (prevErrorRef.current !== errors && errors.length && ulRef.current) {
            const el = ulRef.current;
            el.classList.remove('feedback-indicator--animate');
            void el.offsetWidth;
            el.classList.add('feedback-indicator--animate')
        }
        prevErrorRef.current = errors;
    }, [errors])
```

## Google Maps
* A short description, via mouse hover, on each map Marker

![list desc hover](https://supertramp-mast.s3-us-west-1.amazonaws.com/map+hover.png)


## Dates
* Easy to use calender entries

![Calendar entries](https://supertramp-mast.s3-us-west-1.amazonaws.com/reactdates+calendar.png)

* Custom Algorithm allows for component to calculate total price due and pass information to Rails backend
```
    handlePrice(date) {
        const mseconds = Date.parse(date) - Date.parse(this.state.check_in);
        const days = mseconds / (1000 * 60 * 60 * 24) * this.props.list.price;
        this.setState({
          price: days
        });
    }
```


### Future Direction
---------
* Full CRUD operations on Reviews feature
* Users can message host
* Users can Host Listings
* additional filtering options on search results page