'use strict';
console.log("HI");

let username=prompt("What is your name?");
console.log(username);
alert ("Hi, "+username+", welcome to my page!");

let answer1=prompt("Do I like country music?").toLowerCase();
if(answer1 === 'no' || answer1 === 'n'){
  /*console.log("Correct! I don't like country music.");*/
  alert("Correct! I don't like country music.");
} else{
  alert("Try again :c Hint: I don't like country music.");
  /*console.log("Try again :c Hint: I don't like country music.");*/
}


let answer2=prompt("Am I on the west coast?").toLowerCase();
if(answer2 === 'yes' || answer2 === 'y'){
  alert('Correct! West coast best coast');
  /*console.log("Correct! I'm on the west coast!");*/
} else{
  alert('Try again :c');
  /*console.log ("Try again :c Hint: I'm on the west coast!");*/
}


let answer3=prompt("Is my last name pronounced 'COW'?").toLowerCase();
if(answer3 === 'yes' || answer3 === 'y'){
  alert("Nope! The 'c' is pronounced with a 'ts' sound :) ");
  /*console.log('Nope! My last name is not pronounced that way.');*/
} else{
  alert("You are right! The 'c' is pronounced with a 'ts' sound :)");
  /*console.log ('Wow! You nailed the pronounciation!');*/
}


let answer4=prompt("Do I enjoy spicy food?").toLowerCase();
if(answer4 === 'yes' || answer4 === 'y'){
  alert('Ya!');
  /*console.log('Yes! I love spicy food.');*/
} else{
  alert('Try again :c');
  /*console.log('Hmhmh. Try again! Hint: I like spicy food.');*/
}


let answer5=prompt("Am I enjoying Code Fellows 201?").toLowerCase();
if(answer5 === 'yes' || answer5 === 'y'){
  alert('You bet!'+ 'This is the last question, '+username+ ", and you nailed it!");
  /*console.log('You are right - I like this class!');*/
} else{
  alert('This is the last question, '+username+'Try again :c');
  /*console.log ('Oops. Can you try again?');*/
}

alert ("Thank you for playing the guessing game, "+username+"! you did a great job!");