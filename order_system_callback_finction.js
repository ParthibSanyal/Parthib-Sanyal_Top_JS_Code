function placeOrder(callback) {
    console.log("Order Placed");
    callback();
}

function orderReady() {
    console.log("Order Ready");
}

placeOrder(orderReady);