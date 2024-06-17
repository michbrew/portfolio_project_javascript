const bigString = () => {

    // imports jokesArray
    const jokesArray = require("./jokes");
   
    // imports introsArray
    const introArray = require("./intros");
   
    // imports closingsArray
    const closingArray = require("./closings");

    const intro = "Here is the Dad Joke of the Day, I hope that you enjoy it as much as I did!";
    
    // random number between 0-19 for the intro
    const randomIntroNumber = Math.floor(Math.random()*20);

    // random number between 0-149 to help pick the Dad Joke
    const randomJokeNumber = Math.floor(Math.random()*150);

    // random number between 0-19 to help pick the closing
    const randomClosingNumber = Math.floor(Math.random()*20)
        
    return `\n\n\t${introArray[randomIntroNumber]}\n\n\n\t${intro}\n\n\n\t\t"${jokesArray[randomJokeNumber]}"\n\n\n\tThat's all for today. ${closingArray[randomClosingNumber]}!\n\n`;
}

console.log(bigString());