const jokesArray = require("./jokes");

const introString = "Here is the Dad Joke of the Day, I hope that you enjoy it as much as I did!"

const closingString = "Until next time, keep smiling!"

//console.log(jokesArray.length);

const bigString = () => {
    const randomNumber = Math.floor(Math.random()*150);
    
    return `\n\n${introString}\n\n"${jokesArray[randomNumber]}"\n\n${closingString}\n\n`;
}

console.log(bigString());