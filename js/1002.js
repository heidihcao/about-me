'use strict';

// Array is a list that starts at 0, data structure, is an element
// 0,1,2

// let parksNRec=['Leslie', 'April','Ron','Andy','Ann','Tom'];
// console.log(parksNRec[3]);
// console.log(parksNRec.length);

// parksNRec.push=('Donna', 'Tammy', 'Chris');
//add to the end of array
//Array methods .push() .shift()

// for (let i =0; i<parksNRec.length; i++){
//   if(parksNRec[i]!=='Ron'){
//   console.log(`Hello ${parksNRec[i]}`); 
//   //backtick for template literal for CLEANER VISUAL
//   //money curly for CLEANER VISUAL
//   } else{
//     console.log(`${parksNRec[i]}!!!!`);
//   }
// }


// prompt user for  question


// amount of attempts
let attemptsRemain=6;
let corret = false;
let score = 0;

// ramp up scores


// variable array of flowers
let favFlowers = ['sunflower','wisteria','hydrangea','rose','hyacinthus','lavendar'];

// user is prompted for a guess
let userResponse;

// user input is evaluated
while (attemptsRemain && !correct){
  console.log(`You have ${attemptsRemain-1} attempts remaining`);
  attemptsRemain--;

  for (let i=0; i<favFlowers.length; i++){
    if (userResponse===favFlowers[i]){
      console.log("That's right!");
      correct=true;
    } else {
      console.log("Sorry - incorrect.");
    }
  }
}