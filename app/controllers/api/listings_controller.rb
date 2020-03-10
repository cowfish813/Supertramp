class Api::ListingsController < ApplicationController

    def index
        # @listings = Listing.all
        listings = bounds ? Listing.in_bounds(bounds) : Listing.all


        if params[:name]
            listings = listings.where('name < ? ', params[:name])
        end

        if params[:cancellation_policy]
            listings = listings.where('cancellation policy < ?', params[:cancellation_policy])
        end

        if params(:price)
            listings = listings.where('price < ?', params[:price]) 
        end

        if params[:capacity]
            listings = listings.where('capacity < ?', params[:capacity])
        end

        @listings = listings
        render :index
    end



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
    end



private
    def listing_params
        params.require(:listing).permit(:cancellation_policy, :capacity, :country, :description, :minimum_nights, :name, :on_arrival, :price, :checkin, :checkout, :lat, :lng)
    end

    def bounds
        params[:bounds]
    end

    
end
