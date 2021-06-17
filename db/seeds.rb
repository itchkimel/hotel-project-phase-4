# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Guest.destroy_all
Guest.reset_pk_sequence

Hotel.destroy_all
Hotel.reset_pk_sequence

Reservation.destroy_all
Reservation.reset_pk_sequence

Room.destroy_all
Room.reset_pk_sequence
puts "previous seed data deleted"

Guest.create(username: "guest1", password_digest: "abcd", age: 22)
Guest.create(username: "guest2", password_digest: "abcd", age: 23)


Hotel.create(name: "Brick Hotel", rating: 8, image: "https://cms.qz.com/wp-content/uploads/2020/07/Wythe-Exterior.jpg?quality=75&strip=all&w=1600&h=900&crop=1")
Hotel.create(name: "Vice Hotel", rating: 7, image: "https://a.cdn-hotels.com/cos/heroimage/Miami_0_1609R-32122.jpg?impolicy=fcrop&w=536&h=384&q=high")
Hotel.create(name: "Plaza Leonard", rating: 6, image: "https://images.trvl-media.com/hotels/66000000/65720000/65716900/65716885/8f2abd96_z.jpg")


Room.create(room_type: "King", price: 300, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 1)
Room.create(room_type: "Queen", price: 245, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 1)
Room.create(room_type: "Double", price: 199, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 1)
Room.create(room_type: "Single", price: 150, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 1)

Room.create(room_type: "Double", price: 245, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 2)
Room.create(room_type: "Double", price: 245, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 2)
Room.create(room_type: "Double", price: 245, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 2)
Room.create(room_type: "Double", price: 245, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 2)

Room.create(room_type: "Double", price: 245, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 3)
Room.create(room_type: "Double", price: 245, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 3)
Room.create(room_type: "Double", price: 245, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 3)
Room.create(room_type: "Double", price: 245, image: "https://marriottnews.brightspotcdn.com/8e/d5/b0a4d70940edacc272b6a6ec5a74/finals-suite-penthouse-bedroom-4411-v2.jpg", hotel_id: 3)


Reservation.create(date_start: "06/17/21", date_end: "06/20/21", room_id: 1, guest_id: 1)
Reservation.create(date_start: "06/17/21", date_end: "06/20/21", room_id: 1, guest_id: 2)
Reservation.create(date_start: "06/17/21", date_end: "06/20/21", room_id: 5, guest_id: 1)