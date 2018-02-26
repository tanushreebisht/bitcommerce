/*
 * paypalCart.js
 *
 * Loads the paypal API to query the user's cart/transaction information.
 *
 */

/*
HTTP REQUEST TO GET A NEW TOKEN:

curl -v https://api.sandbox.paypal.com/v1/oauth2/token \
   -H "Accept: application/json" \
   -H "Accept-Language: en_US" \
   -u "client_id:secret" \
   -d "grant_type=client_credentials"
*/


/*


*/


// Technology: OAuth 2.0
// Documentation: 
// Later on for refactoring: https://stackoverflow.com/questions/39301227/external-api-calls-with-express-node-js-and-require-module
function checkAccessToken (item_container) {
    console.log("Loaded checkAccessToken()!");

    $.getJSON("../../paypalToken.json", function (data) {
        $.each(data, function (index, value) {
           console.log(value);
        });
    });

}
/*
function getPaypalAuthToken (item_container) {
    console.log("Loaded getPaypalAuthToken!");
    $.ajax({
        headers: {
            'Accept':'application/json',
            'Accept-Language':'en_US',
            'Content-Type':'application/json'
        },
        method: "GET",
        contentType: "application/json",
        url: "https://api.paypal.com/v1/oauth2/token",
        success: function(data) {
            getPaypalObject();
        }
    });
}
*/
function getPaypalObject (item_container) {
    console.log("Loaded getPaypalObject!");
    checkAccessToken(item_container);
/*
    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "https://api.paypal.com/v1/reporting/transactions",
        success: function(data) {
            console.log("Our data: " + JSON.stringify(data));
            printCartContents(cart_container, data)
        }
    });
*/
}

function printCartContents (cart_container) {
    console.log("Loaded printCartContents!");

    var html_string = ' \
        <a href="../html/checkout.html"> \
        <h3> <span class="simpleCart_total">$0.00</span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span> items)<img src="../images/bag.png" alt=""></h3> \
        </a> \
        <p><a href="javascript:;" class="simpleCart_empty">(empty cart)</a></p> \
        <div class="clearfix"> </div>';
    var container_box = document.getElementById(cart_container);;

// Get the cart and modify string here
    container_box.insertAdjacentHTML('afterbegin',html_string); // use afterbegin to show by oldest items first

} // end function

