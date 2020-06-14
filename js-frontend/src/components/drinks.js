// This is where most of our program will take place.
class Drinks {
  constructor() {
    this.drinks = [];
    this.adapter = new DrinksAdapter();
    this.fetchAndLoadDrinks();
  }
}
