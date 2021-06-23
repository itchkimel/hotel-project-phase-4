class ReservationsController < ApplicationController

    def index
        reservations = Reservation.all
        render json: reservations
    end

    def create
        # byebug
        resv = Reservation.new(resv_params)
        if resv.valid?
            resv.save
            render json: resv, status: 201
        else
            render json: {errors: resv.errors.full_messages}, status: 422
        end
    end

    private

    def resv_params
        params.permit(:date_start, :date_end, :room_id, :guest_id)
    end

end
