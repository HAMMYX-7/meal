const dishes = [
  {
    name: "Jollof Rice",
    ingredients: ["rice", "tomatoes", "onions", "pepper", "meat", "vegetable oil"],
    cookTime: 45,
    image: "jollof.jpeg",
    video: "https://www.youtube.com/watch?v=EfZEArZcfAY"
  },
  {
    name: "Egusi Soup",
    ingredients: ["melon seeds", "palm oil", "ugwu", "stockfish"],
    cookTime: 60,
    image: "egusi.jpg",
    video: "https://www.youtube.com/watch?v=XeZJlxAsP18"
  },
  {
    name: "Pounded Yam and Egusi",
    ingredients: ["yam", "melon seeds", "palm oil", "ugwu"],
    cookTime: 90,
    image: "pounded.jpeg",
    video: "https://www.youtube.com/watch?v=Wya0TcoRBUc"
  },
  {
    name: "Amala and Ewedu",
    ingredients: ["yam flour", "ewedu leaves", "locust beans", "pepper"],
    cookTime: 40,
    image: "amala.png",
    video: "https://www.youtube.com/watch?v=xIxmLk2miqw"
  },
  {
    name: "Suya",
    ingredients: ["beef", "peanuts", "pepper", "ginger", "garlic"],
    cookTime: 25,
    image: "Suya.jpg",
    video: "https://www.youtube.com/watch?v=P8Z8AS1cpEU"
  },
  {
    name: "Ofada Rice and Stew",
    ingredients: ["ofada rice", "unripe peppers", "palm oil", "assorted meat"],
    cookTime: 50,
    image: "ofada.jpg",
    video: "https://www.youtube.com/watch?v=Y13iS68sKbE"
  },
  {
    name: "Bitterleaf Soup",
    ingredients: ["bitterleaf", "cocoyam paste", "palm oil", "stockfish"],
    cookTime: 70,
    image: "Bitterleaf.jpg",
    video: "https://www.youtube.com/watch?v=evL4YHCsdho"
  },
  {
    name: "Oha Soup",
    ingredients: ["oha leaves", "cocoyam paste", "palm oil", "stockfish"],
    cookTime: 65,
    image: "oha.jpg",
    video: "https://www.youtube.com/watch?v=OFkN2tOwIAM"
  },
  {
    name: "Afang Soup",
    ingredients: ["afang leaves", "waterleaf", "palm oil", "periwinkle"],
    cookTime: 75,
    image: "afang.jpeg",
    video: "https://www.youtube.com/watch?v=wiZyjeTh8cQ"
  },
  {
    name: "Efo Riro",
    ingredients: ["spinach", "bell peppers", "palm oil", "assorted meat"],
    cookTime: 45,
    image: "efo.jpeg",
    video: "https://www.youtube.com/watch?v=lxCY5fObe30"
  },
  {
    name: "Moi Moi",
    ingredients: ["beans", "peppers", "onions", "vegetable oil"],
    cookTime: 60,
    image: "moi.jpg",
    video: "https://www.youtube.com/watch?v=7lOH8iJlVQE"
  },
  {
    name: "Akara",
    ingredients: ["beans", "onions", "peppers", "vegetable oil"],
    cookTime: 30,
    image: "akara.jpg",
    video: "https://www.youtube.com/watch?v=cqAMOlnqPVo"
  },
  {
    name: "Pepper Soup",
    ingredients: ["goat meat", "utazi leaves", "pepper", "calabash nutmeg"],
    cookTime: 40,
    image: "peppersoup.jpg",
    video: "https://www.youtube.com/watch?v=7dj-n9w_Vhg"
  },
  {
    name: "Nkwobi",
    ingredients: ["cow foot", "palm oil", "utazi leaves", "potash"],
    cookTime: 50,
    image: "nkwobi.jpeg",
    video: "https://www.youtube.com/watch?v=zX3Ed_4JzGw"
  },
  {
    name: "Ukwa",
    ingredients: ["breadfruit", "palm oil", "crayfish", "pepper"],
    cookTime: 55,
    image: "ukwa.jpeg",
    video: "https://www.youtube.com/watch?v=EI2VIniJto8"
  },
  {
    name: "Ogbono Soup",
    ingredients: ["ogbono seeds", "palm oil", "okra", "stockfish"],
    cookTime: 50,
    image: "ogbono.webp",
    video: "https://www.youtube.com/watch?v=2C_zofzl0oY"
  },
  {
    name: "Edikaikong Soup",
    ingredients: ["waterleaf", "pumpkin leaves", "palm oil", "assorted meat"],
    cookTime: 65,
    image: "edikaikong.jpg",
    video: "https://www.youtube.com/watch?v=wiZyjeTh8cQ"
  },
  {
    name: "Abacha",
    ingredients: ["cassava", "palm oil", "ugba", "garden eggs"],
    cookTime: 35,
    image: "abacha.jpg",
    video: "https://www.youtube.com/watch?v=xeEtKC5BkI0"
  },
  {
    name: "Puff-Puff",
    ingredients: ["flour", "sugar", "yeast", "vegetable oil"],
    cookTime: 20,
    image: "puff.jpeg",
    video: "https://www.youtube.com/watch?v=J3iDndJDQks"
  },
  {
    name: "Zobo Drink",
    ingredients: ["hibiscus leaves", "ginger", "pineapple", "cloves"],
    cookTime: 15,
    image: "zobo.jpg",
    video: "https://www.youtube.com/watch?v=Y13iS68sKbE"
  },
  {
    name: "Beans Soup",
    ingredients: ["beans", "pepper", "onions", "stockfish", "palm oil"],
    cookTime: 55,
    image: "beanssoup.jpeg",
    video: "https://www.youtube.com/watch?v=7lOH8iJlVQE"
  },
  {
    name: "Nsala Soup",
    ingredients: ["yam", "meat", "onions", "fish", "uziza leaf", "locust beans", "ehuru"],
    cookTime: 60,
    image: "nsala.jpeg",
    video: "https://www.youtube.com/watch?v=xeEtKC5BkI0"
  },
  {
    name: "White Hibiscus Soup",
    ingredients: ["white hibiscus leaf", "pepper", "onions", "meat", "vegetable leaf"],
    cookTime: 50,
    image: "white.jpeg",
    video: "https://www.youtube.com/watch?v=Y13iS68sKbE"
  },
  {
    name: "Garden Egg Soup",
    ingredients: ["garden egg", "pepper", "onions", "meat", "vegetable leaf", "palm oil", "tomato", "dry fish", "locust beans"],
    cookTime: 60,
    image: "gardenegg.jpeg",
    video: "https://www.youtube.com/watch?v=xeEtKC5BkI0"
  }
];
// Store checkbox labels globally for search filtering
let checkboxLabels = [];

document.addEventListener("DOMContentLoaded", () => {
  const ingredientOptions = document.getElementById("ingredient-options");
  const ingredientSearch = document.getElementById("ingredient-search");
  const suggestBtn = document.getElementById("suggestBtn");
  const resultContainer = document.getElementById("suggested-dishes-container");

  // Get unique ingredients
  const allIngredients = [...new Set(dishes.flatMap(d => d.ingredients))];
  allIngredients.sort();

  // Create checkboxes
  allIngredients.forEach(ingredient => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = ingredient;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + ingredient));
    label.className = "ingredient-label";
    ingredientOptions.appendChild(label);
    checkboxLabels.push(label);
  });

  // Filter ingredient checkboxes by search input
  ingredientSearch.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    checkboxLabels.forEach(label => {
      const text = label.textContent.toLowerCase();
      label.style.display = text.includes(query) ? "inline-block" : "none";
    });
  });

  // Suggest dishes based on exact ingredient match
 suggestBtn.addEventListener("click", () => {
  const selected = Array.from(document.querySelectorAll("#ingredient-options input:checked")).map(i => i.value);

  if (selected.length === 0) {
    alert("Please select at least one ingredient.");
    return;
  }

  const matches = dishes.filter(dish => {
    const matchedIngredients = selected.filter(ingredient =>
      dish.ingredients.includes(ingredient)
    );
    return matchedIngredients.length >= 1;
  });

  resultContainer.innerHTML = "";

  if (matches.length === 0) {
    resultContainer.innerHTML = "<p>No dishes match your selected ingredients.</p>";
    return;
  }

 matches.forEach(dish => {
  const card = document.createElement("div");
  card.className = "dish-card";

  const name = document.createElement("h3");
  name.textContent = dish.name;

  const ingredientsList = document.createElement("p");
  ingredientsList.innerHTML = `<strong>Ingredients:</strong> ${dish.ingredients.join(", ")}`;

  const cookTime = document.createElement("p");
  cookTime.innerHTML = `<strong>Cook Time:</strong> ${dish.cookTime} minutes`;

  const image = document.createElement("img");
  image.src = dish.image;
  image.alt = dish.name;
  image.className = "dish-image"; // Ensure you have appropriate CSS for this class

  const videoLink = document.createElement("a");
  videoLink.href = dish.video;
  videoLink.textContent = "Watch Recipe Video";
  videoLink.target = "_blank";
  videoLink.className = "video-link"; // Ensure you have appropriate CSS for this class

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(ingredientsList);
  card.appendChild(cookTime);
  card.appendChild(videoLink);

  resultContainer.appendChild(card);
});
});
});
