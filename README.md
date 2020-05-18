#  SuperTramp

SuperTramp is a HipCamp clone web app that allows users to rent out various available locations and share their experiences


Technologies
--------------
* Ruby on Rails
* React and Redux
* PostgreSQL
* AWS
* Google Maps
* Google Places Autocomplete
* HTML/5
* CSS3/SCSS

### Features
--------------
## User Authentication
User Auth was created using BCrypt on rails backend
* User can Sign Up/Sign In/ Sign Out
* Users may Demo the application
* Certain features are available specifically to User including reservations and reviews.

## Animations
* Error messages temporarily display before sliding off screen
* Sign In/Sign Up Modals slide into place
![Login](https://supertramp-mast.s3-us-west-1.amazonaws.com/login+animation.gif)

![Signup](https://supertramp-mast.s3-us-west-1.amazonaws.com/signup+animation.gif)

## Google Places Autocomplete
* Completes partial or completed search terms
![short bar](https://supertramp-mast.s3-us-west-1.amazonaws.com/Google+places+ac.png)

![long bar](https://supertramp-mast.s3-us-west-1.amazonaws.com/full+search+bar.png)

* Passes props to next component on customized URLs
``````````````````````
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
``````````````````````


## Google Maps
* A short description, via mouse hover, on each map Marker

![list desc hover](https://supertramp-mast.s3-us-west-1.amazonaws.com/map+hover.png)

## React Dates
* Easy to use calender entries

![Calendar entries](https://supertramp-mast.s3-us-west-1.amazonaws.com/reactdates+calendar.png)

* Custom Algorithm allows for component to calculate total price due
`````````````````````````````````
    handlePrice(date) {
        const mseconds = Date.parse(date) - Date.parse(this.state.check_in);
        const days = mseconds / (1000 * 60 * 60 * 24) * this.props.list.price;
        this.setState({
          price: days
        });
    }
`````````````````````````````````

### Future Direction
---------
* Full CRUD operations on Reviews feature
* Users can message host
*sanitized quesrs to avoid injection attacks



