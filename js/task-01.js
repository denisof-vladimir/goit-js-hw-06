

const listItems = document.querySelectorAll(".item");
console.log('Number of categories:', listItems.length);
console.log(listItems);


listItems.forEach((item) => {
   
    const itemLi = item.children;
    console.log("category: ", itemLi[0].textContent);
    console.log("elemet: ", itemLi[1].children.length);
})
