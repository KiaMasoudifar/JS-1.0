const prompt = require("prompt-sync")();


let welcome = prompt("Welcome to the coffee shop! Would you like coffee or tea? ").toLowerCase()


if (welcome == "coffee") {
    console.log("Alright! Here is your coffee!")
} else if (welcome == "tea") {
    console.log("Alright! Here is your tea!")
}else {
    console.log("We don't sell that")
}