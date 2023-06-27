document.addEventListener("DOMContentLoaded", () => {
    var form = document.querySelector("form");
    var ul = document.querySelector("ul");
  
    form.addEventListener("submit", (e) => {
        console.log("this is working")
      e.preventDefault();
  
let title= form.querySelector("#title").value;
let genre = form.querySelector("#genre").value;
let description = form.querySelector("#description").value;
let price = form.querySelector("#price").value;

let itemText=`Title: ${title}, Genre: ${genre}, Description: ${description}, Price: ${price}`;


let li = document.createElement("li");
li.textContent = itemText;
ul.append(li);
});
});

// let handleRemove=document.querySelector("")
