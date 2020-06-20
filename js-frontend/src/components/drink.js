// we can create a new instacnce of a drink with this class.
class Drink {
  constructor(drinkJSON) {
    this.id = drinkJSON.id;
    this.name = drinkJSON.name;
    this.description = drinkJSON.description;
  }

  //   renders the html for the drinks container in the dom.
  renderLi() {
    return `<div class="single-drink" id="single-drink"><h4><li data-id=${this.id} class="li-drink-name">${this.name}</li></h4> <p data-id=${this.id} class="p-drink-description">${this.description}</p><button class="delete-button" id="delete-button" type="button">Delete</button></div>`;
  }
}
