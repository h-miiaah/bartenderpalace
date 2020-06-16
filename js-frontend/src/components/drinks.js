// This is where most of our program will take place.
class Drinks {
  constructor() {
    this.drinks = [];
    this.adapter = new DrinksAdapter();
    this.initBindingsAndEventListeners();
    this.fetchAndLoadDrinks();
  }

  initBindingsAndEventListeners() {
    this.drinksContainer = document.getElementById("drinks-container");
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

  //   adds drinks to the drinks-container div on the DOM. Once we hit this render function we have access to an array of drinks (you can console log this.drinks to see).
  //   we set the innerHTML of the drinks container by mapping through the array fo drinks from this.drinks and for each drink we set the html property we want to have in the dom, then join the string we get back with the join method so it displays properly without a "," between each drink.
  render() {
    this.drinksContainer.innerHTML = this.drinks
      .map(
        (drink) => `<h4><li>${drink.name}</li></h4> <p>${drink.description}</p>`
      )
      .join("");
  }
}
