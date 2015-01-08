



// When a game begins, there should be a random number generated between 1-100.
var correctGuess = false,
		randomNumber = Math.floor(Math.random() * 100) + 1,
		tries = 0;
		maxTries = 5;

// The user should have an input field where they can submit a guess.
var Guess = function () {
	var x = document.form1.guess1.value;
	tries++;
	numTries = "You have " + (maxTries - tries) + " guesses remaining";

	if (x < randomNumber) {
		if (Math.abs(x-randomNumber) < 20) {
// hot guess higher
		} else {
// cold guess lower
		}
	} 

	if (x > randomNumber) {
		if (Math.abs(x-randomNumber) < 20) {
					// hot guess lower
		} else {
					// cold guess lower
		}
	} 

	if (x = randomNumber) {
					// correct guess	
	}
	 
}
// After the user submits a guess, indicate whether their guess is 'hot' or 'cold'. Let the user know if they need to guess higher or lower.

// Allow the user to guess only a certain amount of times. When they run out of guesses let them know the game is over.

// create an HTML-based interface for getting user inputs and giving feedback on guesses.
// Validate inputs that they are real numbers between 1-100.
// Create a new game button that resets the game.
// Store all of the guesses and create a way to check if the guess is a repeat.
// Track the user's previous guess. Let them know if they are getting “hotter” or “colder” based on their previous guess.
// Create a button that provides the answer (Give me a Hint).
// Submit the guess by pressing enter or clicking the submit button.
// After a user guesses a number keep a visual list of Hot and Cold answers that the user can see.
// Change the background color, add an image, or do something creative when the user guesses the correct answer.