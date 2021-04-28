import { writable } from 'svelte/store';
//replaces json recipe Data
const recipeStore = writable([
  {
    id: 1,
    name: 'Baked Shrimp Scampi',
    image: './images/1_baked_shrimp_scampi.jpg',
    favorite: true,
    onList: true,
    rating: '5/10',
    instructions: [
      'Preheat the oven to 425 degrees F.',
      'Defrost shrimp by putting in cold water, drain.',
      'Place the shrimp in serving dish (9x13 or 2 quart casserole) and toss gently with the olive oil, wine, 1 teaspoons salt, and 1 teaspoon pepper. Allow to sit at room temperature while you make the butter and garlic mixture.',
      'In a small bowl, mash the softened butter with the garlic, shallots, parsley, rosemary, red pepper flakes, lemon zest, lemon juice, egg yolk, panko, salt, and pepper until combined.',
      'Spread the butter mixture evenly over the shrimp. Bake for 10 to 12 minutes until hot and bubbly. If you like the top browned, place under a broiler for 1-3 minutes (keep an eye on it). Serve with lemon wedges and French bread.',
      'Note: if using fresh shrimp, arrange for presentation. Starting from the outer edge of a 14-inch oval gratin dish, arrange the shrimp in a single layer cut side down with the tails curling up and towards the center of the dish. Pour the remaining marinade over the shrimp.',
    ],
    ingredients: [
      { name: 'panko breadcrumbs', unit: 'cup', quantity: 0.6, type: 'condiments', onList: true },
      { name: 'red pepper flakes', unit: 'tsp', quantity: 0.25, type: 'spices', onList: false },
      { name: 'lemon', unit: null, quantity: 0.5, type: 'produce', onList: false },
      { name: 'egg yolk', unit: null, quantity: 1, type: 'dairy', onList: false },
      { name: 'rosemary', unit: 'tsp', quantity: 1, type: 'spices', onList: false },
      { name: 'parsley', unit: 'tbsp', quantity: 3, type: 'spices', onList: false },
      { name: 'garlic', unit: 'cloves', quantity: 4, type: 'produce', onList: false },
      { name: 'shallots', unit: 'cup', quantity: 0.25, type: 'produce', onList: false },
      { name: 'unsalted butter', unit: 'tbsp', quantity: 8, type: 'dairy', onList: false },
      { name: 'white wine', unit: 'tbsp', quantity: 2, type: 'wine, beer, spirits', onList: false },
      { name: 'black pepper', unit: null, quantity: null, type: 'spices', onList: false },
      { name: 'salt', unit: null, quantity: null, type: 'spices', onList: false },
      { name: 'olive oil', unit: 'tbsp', quantity: 3, type: 'condiments', onList: false },
      { name: 'frozen shrimp', unit: 'lbs', quantity: 2, type: 'meat', onList: false },
    ],
  },
  {
    id: 2,
    name: 'Strawberries Romanov',
    image: './images/2_strawberries_romanov.jpg',
    favorite: false,
    onList: false,
    rating: '8/10',
    instructions: [
      'Wash strawberries and cut the tops off. Let strawberries drain',
      'Mix together heavy whipping cream, powdered sugar, and the brandy.',
      'Beat with a mixer till this becomes thick. Place strawberries into glasses and spoon over the sauce.',
    ],
    ingredients: [
      { name: 'powdered sugar', unit: 'tbsp', quantity: 2, type: 'baking', onList: false },
      { name: 'heavy whipping cream', unit: 'cup', quantity: 1, type: 'dairy', onList: false },
      { name: 'strawberries', unit: 'lb', quantity: 1, type: 'produce', onList: false },
      { name: 'brandy', unit: 'tbsp', quantity: 4, type: 'wine, beer, spirits', onList: false },
    ],
  },
  {
    id: 3,
    name: 'Tomato Basil Soup',
    image: './images/3_tomato_basil_soup.jpg',
    favorite: true,
    onList: false,
    rating: '7/10',
    instructions: [
      'Combine tomatoes, juice and stock in saucepan. Simmer 30 min.',
      'Puree, along with the basil leaves, in small batches, in blender or food processor or use an immersion blender in the pan.',
      'Return to saucepan and add in cream and butter, while stirring over low heat.',
      'Garnish with basil leaves and serve with your favorite bread.',
    ],
    ingredients: [
      { name: 'tomatoes', unit: 'cup', quantity: 4, type: 'produce', onList: false },
      { name: 'vegetable stock', unit: 'cup', quantity: 4, type: 'canned goods', onList: false },
      { name: 'basil leaves', unit: null, quantity: 12, type: 'spices', onList: false },
      { name: 'heavy cream', unit: 'cup', quantity: 1, type: 'dairy', onList: false },
      { name: 'unsalted butter', unit: 'lbs', quantity: 0.25, type: 'dairy', onList: false },
      { name: 'salt', unit: null, quantity: null, type: 'spices', onList: false },
      { name: 'black pepper', unit: 'tsp', quantity: 0.25, type: 'spices', onList: false },
    ],
  },
  {
    id: 4,
    name: 'Pecan Pie',
    image: './images/4_pecan_pie.jpeg',
    favorite: true,
    onList: false,
    rating: '9/10',
    instructions: [
      'Preheat oven to 350F.',
      'In a large saucepan, heat the brown sugar, golden syrup and butter to the boiling point. Stirring constantly and scraping back any foam that clings to the side of the pan, let this mixture boil for about 1 minute. Remove from the heat and let cool while, in a separate bowl, you beat the eggs until creamy.',
      'When the boiled syrup has cooled, beat in the eggs, salt and pecans. Pour into the unbaked pie shell and bake for about 50 minutes.',
      'Notes: A little cream (about 1/4 to 1/2 cup) mixed into a pecan pie filling before baking gives it a richer, lighter texture.',
      'For a sweeter, lighter pie: add more sugar and use fewer pecans; for a denser, less sweet pie: add more pecans and use less sugar.',
      'The buttery flavour and the lard-induced flakiness of a butter and lard crust make it the perfect one for a perfect pecan pie. And a Southern pecan pie authority I know suggests that you roll out the dough a little thicker than usual; a thick, richly shortened crust provides an appetizing balance to the sweetness of the filling.',
    ],
    ingredients: [
      { name: 'salt', unit: 'tsp', quantity: 0.25, type: 'spices', onList: false },
      { name: 'eggs', unit: null, quantity: 3, type: 'dairy', onList: false },
      { name: 'dark rum', unit: 'tbsp', quantity: 4, type: 'wine, beer, spirits', onList: false },
      { name: 'golden syrup', unit: 'cup', quantity: 0.6, type: 'other', onList: false },
      { name: 'dark brown sugar', unit: 'cup', quantity: 1, type: 'baking', onList: false },
      { name: 'pecans', unit: 'cup', quantity: 2, type: 'nuts & seeds', onList: false },
      { name: 'unbaked pie shell', unit: null, quantity: 1, type: 'baking', onList: false },
      { name: 'butter', unit: 'tbsp', quantity: 4, type: 'dairy', onList: false },
    ],
  },
  {
    id: 5,
    name: 'Guacamole',
    image: './images/5_guacamole.jpg',
    favorite: false,
    onList: false,
    rating: '10/10',
    instructions: [
      'Place all ingredients in a bowl with a flat bottom and mash it with a potato masher.  Alternatively, you can mix everything briefly in a food processor.',
      'Stir well and keep refrigerated. This dish will brown on the areas exposed to air within a few hours, so serve it shortly after making it or just stir again before serving.',
    ],
    ingredients: [
      { name: 'avocados', unit: null, quantity: 4, type: 'produce', onList: false },
      { name: 'roma tomatoes', unit: null, quantity: 2, type: 'produce', onList: false },
      { name: 'red onion', unit: 'cup', quantity: 0.5, type: 'produce', onList: false },
      { name: 'cilantro', unit: 'cup', quantity: 0.5, type: 'produce', onList: false },
      { name: 'garlic', unit: 'cloves', quantity: 2, type: 'produce', onList: false },
      { name: 'lime', unit: null, quantity: 1, type: 'produce', onList: false },
      { name: 'salt', unit: 'pinch', quantity: 1, type: 'spices', onList: false },
      { name: 'jalapeno', unit: null, quantity: 1, type: 'produce', onList: false },
    ],
  },
  {
    id: 5,
    name: 'Guacamole',
    image: './images/5_guacamole.jpg',
    favorite: false,
    onList: true,
    rating: '10/10',
    instructions: [
      'Place all ingredients in a bowl with a flat bottom and mash it with a potato masher.  Alternatively, you can mix everything briefly in a food processor.',
      'Stir well and keep refrigerated. This dish will brown on the areas exposed to air within a few hours, so serve it shortly after making it or just stir again before serving.',
    ],
    ingredients: [
      { name: 'avocados', unit: null, quantity: 4, type: 'produce', onList: false },
      { name: 'roma tomatoes', unit: null, quantity: 2, type: 'produce', onList: false },
      { name: 'red onion', unit: 'cup', quantity: 0.5, type: 'produce', onList: false },
      { name: 'cilantro', unit: 'cup', quantity: 0.5, type: 'produce', onList: false },
      { name: 'garlic', unit: 'cloves', quantity: 2, type: 'produce', onList: false },
      { name: 'lime', unit: null, quantity: 1, type: 'produce', onList: false },
      { name: 'salt', unit: 'pinch', quantity: 1, type: 'spices', onList: false },
      { name: 'jalapeno', unit: null, quantity: 1, type: 'produce', onList: false },
    ],
  },
]);

export default recipeStore;