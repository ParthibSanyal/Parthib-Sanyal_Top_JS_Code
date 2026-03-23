let prices = [500, 1500, 2000, 800];

let result = prices.filter(function(price) {
    return price > 1000;
});

console.log(result);