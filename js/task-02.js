const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulItems = document.querySelector("#ingredients");
let listLi=[];

ingredients.forEach((ingredient) => {
  const itemLi = document.createElement("li");


  itemLi.textContent = ingredient;
  itemLi.classList.add("item");
 
  listLi.push(itemLi);

})
ulItems.append( ...listLi );

