let jokes = ["What did the horse say after it tripped?", 
"Why can’t you hear a pterodactyl going to the bathroom?",
"What do you call a well-balaned horse?", "What do you call an angry carrot?", 
"Where do polar bears keep their money?", "How do you make an egg-roll?", 
"What would bears be without bees?"]

let jokesAnswers = ["I’ve fallen and I can’t giddyup!", "Because the “P” is silent.",
"Stable.", "A steamed veggie.","In a snowbank.", "You push it!", "Ears."]

const random = Math.floor(Math.random()*6);

function mixedMessages(){
    for (let i = 0; i < jokes.length; i++){
        for (let j = 0; j < jokesAnswers.length; j++) {
            let todaysJoke = jokes[i];
            let todaysJokeAnswer = jokesAnswers[j];
            if(i === random && j === random){
                console.log(`Knock-knock, smile!!!`)
                console.log(`Today's joke: ${todaysJoke}`)
                console.log(`The answer is: ${todaysJokeAnswer} ^__^`)
                console.log('Have a great day!!')
            }
        }
    }
}
    
mixedMessages(jokes)
