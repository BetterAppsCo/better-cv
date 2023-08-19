class Api::ProfileController < ApplicationController
  def index
    User.first
  end

  def show
    User.first
  end
end
