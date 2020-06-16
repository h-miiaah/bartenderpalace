// we can create a new instacnce of a drink with this class.
class Drink {
  constructor(drinkJSON) {
    this.id = drinkJSON.id;
    this.name = drinkJSON.name;
    this.description = drinkJSON.description;
  }

  //   renders the html for the drinks container in the dom.
  renderLi() {
    return `<h4><li>${this.name}</li></h4> <p>${this.description}</p>`;
  }
}
