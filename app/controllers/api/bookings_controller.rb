class Api::BookingsController < ApplicationController

    before_action :require_logged_in

    def index
        # debugger
        if booking_params[:user_id]
            @bookings = User.find(booking_params[:user_id]).bookings.includes(:listing)
        else
            @bookings = Booking.includes(:listing).all
        end
        render :index
    end

    def show
        @booking = Booking.find(params[:id]) 
        render :show
    end

    def create
        
        @booking = Booking.new(booking_params)
        @booking.user_id = current_user.id
        
        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def update
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        if @booking.destroy && current_user.id == @booking.user_id
            render :show
        else
            # debugger
            render json: @booking.errors.full_messages, status: 422
        end
    end


    private
    def booking_params
        params.require(:booking).permit(:check_in, :check_out, :listing_id, :price, :capacity, :listing_name, :user_id, :host_id, :id)
    end
end
