

const bigString = () => {

    const jokesArray = require("./jokes");

    const closingArray = require("./closings");

    const intro = "Here is the Dad Joke of the Day, I hope that you enjoy it as much as I did!";
    
    const randomJokeNumber = Math.floor(Math.random()*150);

    const randomClosingNumber = Math.floor(Math.random()*20)
    
    return `\n\n\t${intro}\n\n\n\t\t"${jokesArray[randomJokeNumber]}"\n\n\n\tThat's all for today. ${closingArray[randomClosingNumber]}!\n\n`;
}

console.log(bigString());