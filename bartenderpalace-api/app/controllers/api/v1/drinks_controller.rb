class Api::V1::DrinksController < ApplicationController
    def index
        @drinks = Drink.all
        render json: @drinks, status: 200
    end

    def show
        @drink = Dring.find(params[:id])
        render json: @drink, status: 200
    end

    def create
        @drink = Drink.create(drink_params)
        render json: @drink, status: 200
    end

    private

    def drink_params
        params.require(:drink).permit(:name, :decription)
    end
end
