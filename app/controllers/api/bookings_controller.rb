class Api::BookingsController < ApplicationController
    def index
        if params[:userId]
            @bookings = User.find(params[:userId]).bookings
        else
            @bookings = Booking.all
        end
        render :index
    end

    def show
        @booking = Booking.find(params[:id]) 
        # debugger
        render :show
    end

    def create
        
        @booking = Booking.new(booking_params)
        @booking.user_id = current_user.id
        
        if @booking.save
            # debugger
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
         @booking = current_user.bookings.find(params[:id])
        if @booking.destroy
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end


    private
    def booking_params
        params.require(:booking).permit(:check_in, :check_out, :listing_id, :price, :capacity, :listing_name, :user_id, :host_id)
    end
end
