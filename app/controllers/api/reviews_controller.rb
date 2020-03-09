class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, except: [:show, :index]

    def show
        @review = Review.find(params[:id])
    end

end
