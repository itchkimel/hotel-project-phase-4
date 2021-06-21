class Guest < ApplicationRecord
  has_many :reservations, dependent: :destroy
  has_many :rooms, through: :reservations

  validates :age, numericality: {greater_than_or_equal_to: 18}  
  validates :username, presence: :true
end
