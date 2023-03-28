let user;
let num = 0;
let sum = 0; // sum of all numbers user will be added to this variable
let diviser = -1;

while (num != -1) {
    
    
 
     sum = sum + num; // equivalent to sum = sum + num (keeps on adding values and stores to sum variable with every instance)
     diviser++ // keeping track of no of times user has entered a value

     user = prompt ("Enter a number");
     num = parseInt(user);

        
}

 
let average = sum / diviser;
console.log ( " average number is equal to " + average);



