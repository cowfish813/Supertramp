class Api::BookingsController < ApplicationController
    def index
        @bookings = Booking.all
        render :index
    end

    def show
        @booking = Booking.find(params[:id]) 
    end

    def create
        @booking = current_user.bookings.new(booking_params)
    end

    def destroy

    end


    private
    def booking_params
        params.require(:booking).permit(:check_in, :check_out, :listing_id, :price, :capacity)
    end
end
