
function printCartQuant(cart_total) {
    paypal.minicart.view.toggle();

    var html_string = "";
    html_string = "$" + paypal.minicart.cart.total() + ".00";
    console.log("Current cart amount: " + html_string);

    var container_box; 
    container_box = document.getElementById(cart_total);
    container_box.insertAdjacentHTML('afterbegin',html_string);

/*
var parent = document.createElement("div");
var child = document.createElement("p");
parent.appendChild(child);
var span = document.createElement("span");

child.replaceWith(span);
*/

}

function addToCart() {
    paypal.minicart.view.toggle();
    paypal.minicart.cart.add({ 
        "business": "user@example.com",
        "item_name": "Item Name",
        "amount": 10.00,
        "currency_code": "USD" 
    });
    printCartQuant("cart_total");
}

function clearCart(){
    paypal.minicart.view.toggle();
    paypal.minicart.cart.destroy();
    printCartQuant("cart_total");
}
