Rails.application.routes.draw do
  resources :worlds
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'

  root "welcome#index"

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  put '/characters/:character_id/turn' => 'life#turn'
  put '/characters/:id' => 'characters#update'
  post '/characters' => 'characters#create'

  # React Router needs a wildcard
  get "characters(/*all)", to: "characters#index"
end
