/*
window.onload = function() {
  printCartQuant("cart_total");
};
*/

function loadInitialFunctions() {
    loadFooter('thefoot');
    printCartQuant('cart_total')
}

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

    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "https://api.mlab.com/api/1/databases/items/collections/tshirts?apiKey=TWDrwzV7Bh-9-oQuxwZDqBsyk-940NX6",
        success: function(data) {
            paypal.minicart.cart.add({
                "business": "user@example.com",
                "item_name": data[2].name,      // Hardcoded for item2 -- working
                "amount": data[2].price,
                "currency_code": "USD"
            });
            printCartQuant("cart_total");
        }
    });
}

function clearCart(){
    paypal.minicart.view.toggle();
    paypal.minicart.cart.destroy();
    printCartQuant("cart_total");
}
