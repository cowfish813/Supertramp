class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
            # can't get in and make new user 3/2/20
    end
  end

    def show
      @user = User.find(params[:id])
      if @user
        render :show
      else
        render json: @user.errors.full_messages, status: 404
      end
    end

    def edit
      @user = User.find(params[:id])
      render :edit
    end

    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def destroy
      @user = User.find(params[:id])
      if @user.destroy
        #something something homepage...
      else
        render plain: "you can not kill the unkillable"
      end
    end


  private

  def user_params
    params.require(:user).permit(:photo, :username, :email, :last_name, :first_name, :password)
  end
end
