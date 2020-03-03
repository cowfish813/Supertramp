class Api::ListingsController < ApplicationController

    def new
        @listing = Listing.new
        render :new
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.host_id = current_user.id 
        #link host id to current.user id on create only....unless nested...?
        if @listing.save
            # render 'api/listings/show' #DOES NOT EXIST YET. 
            # RENDER WHEN IT DOES
        else
            render json: @listing.errors.full_messages, status:404
        end
    end

    def show
        @listing = Listing.find(params[:id])
        # render 'api/listings/show' #DOES NOT EXIST YET.
    end

    def index
        #needs a search params
        #else it is @listings = Listings.all

        @listings = Listing.all
    end


private
    def listing_params
        params.require(:listing).permit(:cancellation_policy, 
        :capacity, :country, :description, :minimum_nights, 
        :name, :on_arrival, :price, :checkin, :checkout, :lat, :lng
        )
    end
    
end
