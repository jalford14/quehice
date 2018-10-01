Rails.application.routes.draw do
  
  get 'welcome/index'
  
  resources :tasks, except: [:show]

  root 'welcome#index'
  
end
