let User = prompt ("Enter a number of atleast three digits");
let array = User.split(""); // method returns an array of string characters

let secondDigit;
let lastDigit
for (let i = 0; i < array.length; i++) { //for loop to iterate through an array
   
    // check and store second and last digit
    if(i == 1){
        secondDigit = array[i];

    }
    else if (i == 2){
        lastDigit = array[i];
    }

}
// swop second and last digit 
array[1] = lastDigit;
array[2] = secondDigit;

let swopNumber = array.join("")
console.log(User + " is the original number");
console.log(swopNumber + " is the new number");