
function printCartQuant(cart_total) {
    paypal.minicart.view.toggle();

    var html_string = "";
    html_string = "$" + paypal.minicart.cart.total() + ".00";

    var container_box; 
    container_box = document.getElementById(cart_total);

    var newTotalElement = document.createElement("div");
    var child = document.createTextNode(html_string);
    newTotalElement.appendChild(child);
    newTotalElement.setAttribute("id", "cart_total");

    if (container_box != null){
        container_box.replaceWith(newTotalElement);
    }
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
