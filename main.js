getTotal = () => {
    let price = document.querySelector('#price').value;
    let inStock = document.querySelector('#inStock').value;
    if(isNaN(price) || isNaN(inStock)){
         alert("Quantity and Price Must be valid numbers")
    }else{
        let total = parseFloat( price * inStock);
        document.querySelector('#total').value = total.toFixed(2);
    }
}

addInventory = () =>{
    let totalInventory = JSON.parse(localStorage.getItem("totalInventory"));
    if(totalInventory == null){
        totalInventory = []
    }
    
    let title = document.querySelector('#title').value;
    let price = document.querySelector('#price').value;
    let inStock = document.querySelector('#inStock').value;

    if (title == "" || title == null) {
        alert("please enter title")
    }else if (price == "" || isNaN(price)) {
        alert("enter a valid number")
    }else if (inStock == "" || isNaN(inStock)) {
        alert("enter a valid quantity")
    }else{
        let total = parseFloat( price * inStock);
        total = total.toFixed(2);     
        let newInventory = {
            title : title,
            price : price,
            inStock : inStock,
            total : total
        }
        totalInventory.push(newInventory)
        localStorage.setItem("totalInventory", JSON.stringify(totalInventory))
        window.location.reload() 
    }
}

getGrandTotal = () =>{
    let grandTotal = 0;
    let totalInventory = JSON.parse(localStorage.getItem("totalinventory"));
    if (totalInventory != null && totalInventory.length > 0) {
        
        for (let index = 0; index < totalInventory.length; index++) {

            grandTotal  += parseFloat(totalInventory[index]["total"]);
            grandTotal = grandTotal;


            
        }
    }
    document.querySelector('#grandTotal').innerHTML = grandTotal;
    
}



showInventory = () =>{
    getGrandTotal();
    let totalInventory = JSON.parse(localStorage.getItem("totalInventory"));
    if (totalInventory != null && totalInventory.length > 0) {
        let table = document.querySelector('#inventoryTable');
        for (let index = 0; index < totalInventory.length; index++) {
            let row = table.insertRow(1);
            let inventoryTitle = row.insertCell(0);
            let inventoryPrice = row.insertCell(1);
            let inventoryInStock = row.insertCell(2);
            let inventoryTotal = row.insertCell(3);
            let inventoryAction = row.insertCell(4);

            inventoryAction.className = "text-center";


            inventoryTitle.innerHTML = totalInventory[index]["title"];
            inventoryPrice.innerHTML = totalInventory[index]["price"];
            inventoryInStock.innerHTML = totalInventory[index]["inStock"];
            inventoryTotal.innerHTML = [index]["total"];

            getGrandTotal();

            let btn = document.createElement('input');
            btn.type = "button";
            btn.className = "btn";
            btn.value = "delete";
            btn.onclick = (function(index) {
                return function() {

                    if (confirm("Do you want to delete your inventory data ?")) {
                        localStorage.clear();
                        window.location.reload();

                        totalInventory.splice(index, 1) 
                        alert("item deleted")
                        window.location.reload();
                        localStorage.setItem("totalInventory", JSON.stringify(totalInventory)); 
                        getGrandTotal();
                    }     
                }
            })(index);
            inventoryAction.appendChild(btn);
        }
    }
}






clearButton = () => {
    if (confirm("Do you want to clear all your inventory data ? This action cannot be un done")) {
        localStorage.clear();
        window.location.reload();
    }
    
}



showInventory();