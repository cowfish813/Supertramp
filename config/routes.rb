Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json} do
      resources :users, only:[:create, :show, :update]
      resource :session, only:[:create, :destroy]
      resources :listings, only:[:create, :destroy, :update, :show, :index] do
        collection do
          get :random
        end
    end
    resources :reviews, only:[:create, :destroy, :update]
    resources :bookings, only:[:create, :destroy, :update, :show, :index]

  

  root to: "static_pages#root"
end
