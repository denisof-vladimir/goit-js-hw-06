

const listItems = document.querySelectorAll(".item");
console.log('Number of categories:', listItems.length);
console.log(listItems);


listItems.forEach((item) => {

    const itemName = item.querySelector("h2").textContent;
    const itemElement = item.querySelectorAll("ul li"); 
   
    console.log(`category: ${itemName}`);
    console.log(`elemet: `, itemElement.length);
})
