class Api::ListingsController < ApplicationController

    def index
        # @listings = Listing.all
        @listings = Listing.in_bounds(bounds)
        # debugger
        # if params[:price]
        #     @listings = @listings.where('price < ?', price)
        # end

        # if params[:capacity]
        #     @listings = @listings.where('capacity < ?', capacity)
        # end

        render :index
    end



    def new
        @listing = Listing.new
        render :new
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.host_id = current_user.id
        if @listing.save!
            render json: {message: "successful create"}
            # render :show
        else
            render json: @listing.errors.full_messages, status:404
        end
    end

    def show
        @listing = Listing.find(params[:id])
        @host = User.find(@listing.host_id)
        render :show
    end



private
    def listing_params
        params.require(:listing).permit(:photos, :cancellation_policy, :capacity, :country, :description, :minimum_nights, :on_arrival, :price, :checkin, :checkout, :lat, :lng, :name)
    end

    def bounds
        params[:bounds]
    end

    def capacity
        params[:capacity]
    end

    
end
