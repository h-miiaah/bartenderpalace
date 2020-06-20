// This file talks to the backend api.
class DrinksAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/drinks";
  }

  //   gets our drinks from the database and returns them in json format.
  getDrinks() {
    return fetch(this.baseUrl).then((res) => res.json());
  }

  createDrink(drinkNameValue, drinkDescriptionValue) {
    const drink = {
      name: drinkNameValue,
      description: drinkDescriptionValue,
    };
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ drink }),
    }).then((res) => res.json());
  }

  updateDrink(updatedDrinkName, updatedDrinkDescription, id) {
    const drink = {
      name: updatedDrinkName,
      description: updatedDrinkDescription,
    };
    return fetch(`${this.baseUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ drink }),
    }).then((res) => res.json());
  }

  deleteDrink(id) {
    const drink = {
      id: id,
    };
    return fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ drink }),
    }).then((res) => res.json());
  }
}
