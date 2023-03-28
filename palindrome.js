let User = prompt ("Enter a word"); //request input from user
let palindrome = User.split("").reverse("").join("") // split string method returns an array of string characters individually
let index = 0; // index always starts at 0
let isPalindrome = false; // initialise the variable with a false value

while (User.charAt(index) == palindrome.charAt(index)) { //comparing the users string to the reverse string at the character of the index
  
    if(index <= User.length){ // comparing the value of the index to the string length
       index++;

   }
   
   else {
       isPalindrome = true;
       break;
   }
   
}

if(isPalindrome == true){ // checking to see whether the user input is a palindrome or not 

    console.log(User + " is a palindrome");
    }

    else{
    console.log(User + " is not a palindrome");
}
