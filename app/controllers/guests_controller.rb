class GuestsController < ApplicationController

    def index
        guests = Guest.all
        render json: guests
    end

    def show
        guest = Guest.find_by(id: params[:id])
        render json: guest
    end

    def create
        guest = Guest.new(guest_params)
        if guest.valid?
            guest.save
            render json: guest, status: 201
        else
            render json: {errors: guest.errors.full_messages}, status: 422
        end
    end

    def update
        guest = Guest.find_by(id: params[:id])
        guest.assign_attributes(guest_params)

        if guest.valid?
            guest.save
            render json: guest, status: 201
        else
            render json: {errors: guest.errors.full_messages}, status: 422
        end
    end

    def destroy
        guest = Guest.find_by(id: params[:id])
        if guest
        guest.destroy
        render json: {}, status: :no_content 
        else
        render json: {error: guest.errors.full_messages}, status: 404
        end
    end
    
    private

    def guest_params
        params.permit(:username, :password_digest, :age)
    end

end
