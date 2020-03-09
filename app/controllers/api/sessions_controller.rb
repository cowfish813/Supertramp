class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # debugger
    if @user.nil?
      # flash.now[:errors] = @user.full_messages
      render json: ["session controller create error: user could not be authenticated"], status: 404
    else
      login!(@user)
      render "api/users/show"
    end
  end

  def destroy

    if logout!
      render :new
    else
      render status: 404, json: ["there is no current user to logout"]
    end
  end
end
