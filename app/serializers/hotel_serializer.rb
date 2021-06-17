class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :image
end
