class GuestSerializer < ActiveModel::Serializer
  attributes :id, :username, :age
  has_many :reservations
  has_many :rooms, through: :reservations
end
