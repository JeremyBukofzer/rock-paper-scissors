// define array for choices [r,p,s]
var choices = ['R', 'P', 'S']

var wins = 0
var losses = 0
var ties = 0

var keepPlaying


// define var for userChoice
// prompt userChoice
var userChoice = prompt('Type R, P, or S:')
console.log(userChoice)

// randomly choose computerChoice
// define var for computerChoice
var random = Math.floor(Math.random() * choices.length)
var computerChoice = choices[random]
console.log(computerChoice)

var result

if (userChoice === computerChoice) {
    ties++
    result = 'tied'
} else if (userChoice === 'R' && computerChoice === "S" ||
userChoice === 'P' && computerChoice === "R" ||
userChoice === 'S' && computerChoice === "P"
) {
    wins++
    result = 'won!'
} else {
    losses++
    result= 'lost!'
}

// Compare choices
alert('You ' + result)

alert('Stats:\nWins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties)




var confirm('Want to play again?')






// display (alert) results (win, tie, lose round)

// show stats (number of wins, losses, and ties)

// play again
    //restart game
// else
    // end game

