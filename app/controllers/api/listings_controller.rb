class Api::ListingsController < ApplicationController

    def index
        @listings = Listing.all

        # listings = bounds ? Listing.in_bounds(bounds) : Listing.all

        # if params[:name]
        #     listings = listings.where('name < ? ', params[:name])
        # end

        # if params[:cancellation_policy]
        #     listings = listings.where('cancellation policy < ?', params[:cancellation_policy])
        # end

        # if params(:price)
        #     listings = listings.where('price < ?', params[:price]) 
        # end

        # if params[:capacity]
        #     listings = listings.where('capacity < ?', params[:capacity])
        # end
        # if params[:photos]
        #     listings = listings.where('photos < ?', params[:photos])
        # end

        # @listings = listings
        render :index
    end



    def new
        @listing = Listing.new
        render :new
    end

    def create
        # debugger
        @listing = Listing.new(listing_params)
        @listing.host_id = current_user.id         
        if @listing.save
            # render json: {message: "successful create"}
            render :show
        else
            render json: @listing.errors.full_messages, status:404
        end
    end

    def show
        @listing = Listing.find(params[:id])
    end



private
    def listing_params
        params.require(:listing).permit( :image_url, :image_file, :cancellation_policy, :capacity, :country, :description, :minimum_nights, :on_arrival, :price, :checkin, :checkout, :lat, :lng, :name, photos: [])
    end

    def bounds
        params[:bounds]
    end

    
end
