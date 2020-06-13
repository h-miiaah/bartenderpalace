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

    def update
        @drink = Dring.find(params[:id])
        @drink.update(drink_params)
        render json: @drink, status: 200
    end

    def destroy
        @drink = Dring.find(params[:id])
        @drink.delete
        render json: {drinkId: @drink.id}
    end

    private

    def drink_params
        params.require(:drink).permit(:name, :decription)
    end
end
