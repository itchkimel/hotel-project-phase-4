class RoomSerializer < ActiveModel::Serializer
  attributes :id, :type, :price, :image, :hotel_id
end
