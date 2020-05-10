Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json} do
      resources :users, only:[:create, :show, :update, :edit]
      resource :session, only:[:create, :destroy]
      resources :listings, only:[:create, :destroy, :update, :show, :index]
      resources :reviews, only:[:create, :destroy, :update]
      resources :bookings, only:[:create, :destroy, :update, :show, :index]
  end

  

  root to: "static_pages#root"
end
