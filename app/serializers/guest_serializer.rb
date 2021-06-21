class GuestSerializer < ActiveModel::Serializer
  attributes :username, :age
  
  has_many :reservations
  has_many :rooms, through: :reservations
end
