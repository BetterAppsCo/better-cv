class ApplicationController < ActionController::Base
  def health
    render json: {
      status: 'ok',
      timestamp: Time.current.iso8601,
      version: Rails.application.class.module_parent_name,
      environment: Rails.env
    }
  end
end
