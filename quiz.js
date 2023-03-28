const question = "What color is the sky? \n A: Purple\n B: Pink\n C: Blue\n D: Yellow"; // input question to user
  

let correct, retry = false; // assign a boolean value

do {
  correct = prompt(question).toLowerCase() == 'c'; //assign correct answer to 'correct' variable which is = "c"

  if (!correct) retry = prompt("This is incorrect? would you like to try again Y/N").toLowerCase() == 'y'; // if user answers incorrectly prompt user to retry
} while (!correct && retry); // constantly prompt user if correct answer not stated and continously retry

console.log (correct ? " Congratulations! you are correct)" : " I'm sorry this is incorrect."); //output correct or incorrect answer
