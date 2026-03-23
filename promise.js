let payment = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }
});

payment
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err) {
        console.log(err);
    });