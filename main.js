

const bigString = () => {
    
    const jokesArray = require("./jokes");

    const introString = "Here is the Dad Joke of the Day, I hope that you enjoy it as much as I did!";

    const closingString = "Until next time, keep smiling!";

    const randomNumber = Math.floor(Math.random()*150);
    
    return `\n\n\t${introString}\n\n\n\t\t"${jokesArray[randomNumber]}"\n\n\n\t${closingString}\n\n`;
}

console.log(bigString());