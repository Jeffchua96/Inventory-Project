const { update } = require("lodash");

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let ul = document.querySelector("ul");


form.addEventListener("submit", (e) => {
console.log("this is working")
e.preventDefault();


let title= form.querySelector("#title").value;
let genre = form.querySelector("#genre").value;
let description = form.querySelector("#description").value;
let price = form.querySelector("#price").value;
let sale = form.querySelector("#sale").value;

let itemText=`Title: ${title}, <br> Genre: ${genre}, <br> Description: ${description},<br> Price: ${price}`;

let li = document.createElement("li");
li.textContent = itemText;
console.log(li)
ul.append(li);
});
});


const remove = document.createElement("button");
remove.textContent = "Remove";
li.append(remove);

remove.addEventListener("click", (e) => {
    ul.remove(li); 
    updateInventoryCount();
});

document.updateInventoryCount('inventory-count',(e) => { 
    e.inventoryCount = document.getElementById("inventory-count");
    inventoryCount.textContent = document.querySelectorAll("li").length;
}
);  
    

function addBook () {
    let form = document.querySelector("form");
    let ul = document.querySelector("ul");


    let table=document.getElementsByTagName ("table")[0];
    let newRow=table .insertRow(table.length);
    let cell1=newRow.insertCell(0);
}

function itemText(title, genre, description, price){
    const li = document.createElement("li");
    li.textContent += title;

    if (genre) {
      const strong = document.createElement("strong");
      strong.textContent = "genre:";
      li.append(document.createElement("br"), strong, genre);
    }
  
    if (description) {
      const strong = document.createElement("strong");
      strong.textContent = "description: ";
      li.append(document.createElement("br"), strong, description);
    }
  
    if (price) {
        const strong=document.createElement("strong");
        strong.textContent="price:"
              li.append(document.createElement("br"), strong,
        price)
    }
// let title= document.getElementById("title").value;    
// title.remove() = title;
// console.log(remove);
// li.append(remove);


remove.addEventListener("click", (e) => {

    ul.remove(li);
})

}

// function removeItem() {