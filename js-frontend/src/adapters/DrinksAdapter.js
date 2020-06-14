// This file talks to the backend api.
class DrinksAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/drinks";
  }

  //   gets our drinks from the database and returns them in json format.
  getDrinks() {
    return fetch(this.baseUrl).then((res) => res.json());
  }
}
