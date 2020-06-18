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
    this.body = document.querySelector("body");
    this.newDrinkName = document.getElementById("new-drink-name");
    this.newDrinkDescription = document.getElementById("new-drink-description");
    this.drinkForm = document.getElementById("new-drink-form");
    this.drinkForm.addEventListener("submit", this.createDrink.bind(this)); // we bind(this) to this.createDrink to it will bind the Drinks class otherwise it will bind the drink form.
    this.drinksContainer.addEventListener(
      "dblclick",
      this.handleDrinkClick.bind(this)
    );
    this.body.addEventListener("blur", this.updateDrink.bind(this), true);
  }

  // adding an event parameter so we can then prevent the default behavior of refreshing the page after creating a drink using the form. Set consts on the drinkNameValue, and drinkDescriptionValue. Use the adapters createDrink() to make a POST fetch request to the api, clear out the input fields from the form, then render that drink to the dom.
  createDrink(e) {
    e.preventDefault();
    const drinkNameValue = this.newDrinkName.value;
    const drinkDescriptionValue = this.newDrinkDescription.value;

    this.adapter
      .createDrink(drinkNameValue, drinkDescriptionValue)
      .then((drink) => {
        this.drinks.push(new Drink(drink));
        this.newDrinkName.value = "";
        this.newDrinkDescription.value = "";
        this.render();
      });
  }

  handleDrinkClick(e) {
    const selectedElement = e.target;
    selectedElement.contentEditable = true;
    selectedElement.focus();
    selectedElement.classList.add("editable");
  }

  updateDrink(e) {
    const selectedElement = e.target;
    const id = selectedElement.dataset.id;
    selectedElement.contentEditable = false;
    selectedElement.classList.remove("editable");
    // const updatedElementValue = selectedElement.innerHTML;
    let updatedDrinkName = document.querySelector(
      `li[data-id='${CSS.escape(id)}'].li-drink-name`
    ).innerHTML;
    let updatedDrinkDescription = document.querySelector(
      `p[data-id='${CSS.escape(id)}'].p-drink-description`
    ).innerHTML;

    this.adapter.updateDrink(updatedDrinkName, updatedDrinkDescription, id);
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
  //   we set the innerHTML of the drinks container by mapping through the array fo drinks from this.drinks and for each drink we set the html property we want to have in the dom using the renderLi() from the Drink class, then join the string we get back with the join method so it displays properly without a "," between each drink.
  render() {
    this.drinksContainer.innerHTML = this.drinks
      .map((drink) => drink.renderLi())
      .join("");
  }
}
