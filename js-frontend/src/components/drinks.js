// This is where most of our program will take place.
class Drinks {
  constructor() {
    this.drinks = [];
    this.adapter = new DrinksAdapter();
    this.fetchAndLoadDrinks();
  }

  fetchAndLoadDrinks() {
    this.adapter
      .getDrinks()
      .then((drinks) => {
        drinks.forEach((drink) => this.drinks.push(new Drink(drink)));
      })
      .then(() => {
        this.render();
      });
  }

  //   adds drinks to the drinks-container div on the DOM.
  render() {
    const drinksContainer = document.getElementById("drinks-container");
    drinksContainer.innerHTML = "drinks go here";
  }
}
