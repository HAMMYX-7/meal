const dishes = [
  {
    name: "Jollof Rice",
    ingredients: ["rice", "tomatoes", "onions", "pepper", "vegetable oil"],
    cookTime: 45
  },
  {
    name: "Egusi Soup",
    ingredients: ["melon seeds", "palm oil", "ugwu", "stockfish"],
    cookTime: 60
  },
  {
    name: "Pounded Yam and Egusi",
    ingredients: ["yam", "melon seeds", "palm oil", "ugwu"],
    cookTime: 90
  },
  {
    name: "Amala and Ewedu",
    ingredients: ["yam flour", "ewedu leaves", "locust beans", "pepper"],
    cookTime: 40
  },
  {
    name: "Suya",
    ingredients: ["beef", "peanuts", "pepper", "ginger", "garlic"],
    cookTime: 25
  },
  {
    name: "Ofada Rice and Stew",
    ingredients: ["ofada rice", "unripe peppers", "palm oil", "assorted meat"],
    cookTime: 50
  },
  {
    name: "Bitterleaf Soup",
    ingredients: ["bitterleaf", "cocoyam paste", "palm oil", "stockfish"],
    cookTime: 70
  },
  {
    name: "Oha Soup",
    ingredients: ["oha leaves", "cocoyam paste", "palm oil", "stockfish"],
    cookTime: 65
  },
  {
    name: "Afang Soup",
    ingredients: ["afang leaves", "waterleaf", "palm oil", "periwinkle"],
    cookTime: 75
  },
  {
    name: "Efo Riro",
    ingredients: ["spinach", "bell peppers", "palm oil", "assorted meat"],
    cookTime: 45
  },
  {
    name: "Moi Moi",
    ingredients: ["beans", "peppers", "onions", "vegetable oil"],
    cookTime: 60
  },
  {
    name: "Akara",
    ingredients: ["beans", "onions", "peppers", "vegetable oil"],
    cookTime: 30
  },
  {
    name: "Pepper Soup",
    ingredients: ["goat meat", "utazi leaves", "pepper", "calabash nutmeg"],
    cookTime: 40
  },
  {
    name: "Nkwobi",
    ingredients: ["cow foot", "palm oil", "utazi leaves", "potash"],
    cookTime: 50
  },
  {
    name: "Ukwa",
    ingredients: ["breadfruit", "palm oil", "crayfish", "pepper"],
    cookTime: 55
  },
  {
    name: "Ogbono Soup",
    ingredients: ["ogbono seeds", "palm oil", "okra", "stockfish"],
    cookTime: 50
  },
  {
    name: "Edikaikong Soup",
    ingredients: ["waterleaf", "pumpkin leaves", "palm oil", "assorted meat"],
    cookTime: 65
  },
  {
    name: "Abacha",
    ingredients: ["cassava", "palm oil", "ugba", "garden eggs"],
    cookTime: 35
  },
  {
    name: "Puff-Puff",
    ingredients: ["flour", "sugar", "yeast", "vegetable oil"],
    cookTime: 20
  },
  {
    name: "Zobo Drink",
    ingredients: ["hibiscus leaves", "ginger", "pineapple", "cloves"],
    cookTime: 15
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const allIngredients = [...new Set(dishes.flatMap(d => d.ingredients))];
  const ingredientOptionsDiv = document.getElementById("ingredient-options");
  const suggestBtn = document.getElementById("suggestBtn");
  const suggestedDishesContainer = document.getElementById("suggested-dishes-container");

  // Render ingredient checkboxes
  allIngredients.sort().forEach(ingredient => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = ingredient;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(ingredient));
    ingredientOptionsDiv.appendChild(label);
  });

  suggestBtn.addEventListener("click", () => {
    const selected = Array.from(ingredientOptionsDiv.querySelectorAll("input:checked")).map(c => c.value);
    suggestedDishesContainer.innerHTML = "";

    if (selected.length === 0) {
      alert("Please select some ingredients.");
      return;
    }

    const matchedDishes = dishes
      .map(dish => {
        const matchCount = dish.ingredients.filter(i => selected.includes(i)).length;
        return { ...dish, matchCount };
      })
      .filter(d => d.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);

    if (matchedDishes.length === 0) {
      suggestedDishesContainer.innerHTML = "<p>No matching dishes found.</p>";
      return;
    }

    matchedDishes.forEach(dish => {
      const card = document.createElement("div");
      card.className = "dish-card";

      const name = document.createElement("h2");
      name.textContent = dish.name;

      const ingredientsList = document.createElement("ul");
      dish.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });

      const cookTime = document.createElement("p");
      cookTime.textContent = `Cook Time: ${dish.cookTime} mins`;

      card.appendChild(name);
      card.appendChild(ingredientsList);
      card.appendChild(cookTime);

      suggestedDishesContainer.appendChild(card);
    });
  });
});
