// Check if the user is ready to play!
var age = prompt("What is your age ?");

if(age < 13)
{
console.log ("They are allowed to play but I take no responsibility");
}
else 
{
    console.log("Here is an encouraging message ! ");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt ("Do you want to race Bieber on stage ?");

if (userAnswer == "Yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
    
}

else 
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

