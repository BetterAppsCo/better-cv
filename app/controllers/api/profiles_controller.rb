class Api::ProfilesController < ApplicationController
  def show
    user = User.first
    render status: :ok, json: user
  end
end
