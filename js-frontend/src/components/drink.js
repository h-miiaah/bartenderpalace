// we can create a new instacnce of a drink with this class.
class Drink {
  constructor(drinkJSON) {
    this.id = drinkJSON.id;
    this.name = drinkJSON.name;
    this.description = drinkJSON.description;
  }
}
