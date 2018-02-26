
function printCartQuant(cart_total) {
        paypal.minicart.view.toggle();

    $('.form-text').change(function() {
        container_box = document.getElementById(cart_total);
        html_string = paypal.minicart.cart.total();
        container_box.insertAdjacentHTML('beforeend',html_string);
    });
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
