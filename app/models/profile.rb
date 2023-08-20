class Profile < ApplicationRecord
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze
  
  validates :name, length: { maximum: 30 }
  validates :email, format: { with: VALID_EMAIL_REGEX }
  belongs_to :user
  
  private
    def to_lowercase
      email.downcase!
    end
end