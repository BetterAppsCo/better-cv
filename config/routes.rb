Rails.application.routes.draw do
  draw :api
  
  root 'home#index'
  get '*path', to: 'home#index', via: :all
end
