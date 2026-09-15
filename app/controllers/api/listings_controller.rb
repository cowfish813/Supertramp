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


    def random
        params.fetch(:count, 6).to_i.clamp(1,12)
        scope = Listing.all
        scopt = scope.in_bounds(bounds) if params[:bounds].present?

        @listings = scope.order(Arel.sql("RANDOM()")).limit(count)
        render :index
    end

private
    def listing_params
        params.require(:listing).permit(:photos, :cancellation_policy, :capacity, :country, :description, :minimum_nights, :on_arrival, :price, :checkin, :checkout, :lat, :lng, :name)
    end

    def bounds
        params.require(:bounds).permit(
            northEast: [:lat, :lng],
            southWest: [:lat, :lng]
        ).to_h.deep_symbolize_keys
    end

    def capacity
        params[:capacity]
    end


end
