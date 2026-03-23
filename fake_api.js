async function getUser() {
    let data = await new Promise(function(resolve) {
        setTimeout(function() {
            resolve("User Data Loaded");
        }, 2000);
    });

    console.log(data);
}

getUser();