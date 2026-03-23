let cart = [100, 200, 300];

let total = cart.reduce(function(sum, item) {
    return sum + item;
}, 0);

console.log(total);