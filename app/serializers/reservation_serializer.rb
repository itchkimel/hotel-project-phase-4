class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :date_start, :date_end, :room_id, :guest_id
end
