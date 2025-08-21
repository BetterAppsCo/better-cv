Rails.application.routes.draw do
  draw :api
  
  # Health check endpoint for deployment platforms
  get '/health', to: 'application#health'
  
  root 'home#index'
  get '*path', to: 'home#index', via: :all
end
