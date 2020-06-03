# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#
class User < ApplicationRecord
    attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, :last_name, :first_name, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}

  after_initialize :ensure_session_token


  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    
    @password = password
  
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
  
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
  
  has_many :listings,
  foreign_key: :host_id,
  dependent: :destroy

  has_many :reviews,
  foreign_key: :user_id,
  class_name: :Review,
  dependent: :destroy

  # has_many_attached :photos
  has_one_attached :photo
  
  has_many :bookings,
  foreign_key: :user_id,
  class_name: :Booking,
  dependent: :destroy

  
end


