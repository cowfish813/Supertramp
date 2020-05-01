class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, except: [:show, :index]

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.listing_id = @listing.id #maybe delete?
        if @review.save!
            render json: {message: "successful create"}
            # render :show
        else
            render json: @review.errors.full_messages, status:404
        end
    end

    def index
        @reviews = Review.all
        render :index
    end

    def update
        @review = current_user.reviews.find(params[id])

        if @review.update(review_params)
            render :show
        else
            render json @review.errors.full_messages, status:422
        end
    end

    def destroy
        @review = current_user.reviews.find(params[id])
        if @review.destroy
            render :show
        else
            render json @review.errors.full_messages, status:422
        end
    end

    private

    def review_params
        params.require(:review).permit(:body, :recommended, :title)
    end

end
