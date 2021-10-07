'use strict';
// console.log("HI");


let username=prompt("What is your name?");
console.log(username);
alert ("Hi, "+username+", WELCOME🙌🏼!");
let score =0;

function QuestionOne() {
  let answer1=prompt("Do I like country music?").toLowerCase();
  if(answer1 === 'no' || answer1 === 'n'){
    /*console.log("Correct! I don't like country music.");*/
    alert("Correct! I don't like country music 🎸");
    score = score+1;
    console.log(score);
  } else{
    alert("Incorrect. Hint: I don't like country music 🎸");
    /*console.log("Try again :c Hint: I don't like country music.");*/
  }
}
QuestionOne() ;

function QuestionTwo() {
  let answer2=prompt("Am I on the west coast?").toLowerCase();
  if(answer2 === 'yes' || answer2 === 'y'){
  alert('Correct! West coast best coast 🌊');
  score = score+1;
  console.log(score);
  /*console.log("Correct! I'm on the west coast!");*/
  } else{
  alert('That was incorrect 🤭');
  /*console.log ("Try again :c Hint: I'm on the west coast!");*/
  } 
}
QuestionTwo() ;

function QuestionThree() {
  let answer3=prompt("Is my last name pronounced 'COW'?").toLowerCase();
  if(answer3 === 'yes' || answer3 === 'y'){
    alert("Nope! The 'c' is pronounced with a 'ts' sound 😄 ");
    /*console.log('Nope! My last name is not pronounced that way.');*/
  } else{
    alert("You are right! The 'c' is pronounced with a 'ts' sound 😄");
    score = score+1;
    console.log(score);
    /*console.log ('Wow! You nailed the pronounciation!');*/
  }
}
QuestionThree() ;

function QuestionFour() {
  let answer4=prompt("Do I enjoy spicy food?").toLowerCase();
  if(answer4 === 'yes' || answer4 === 'y'){
    alert('Ya! 🔥');
    score = score+1;
    console.log(score);
    /*console.log('Yes! I love spicy food.');*/
  } else{
    alert('That was incorrect 🤭');
    /*console.log('Hmhmh. Try again! Hint: I like spicy food.');*/
  }
}
QuestionFour() ;

let answer5=prompt("Am I enjoying Code Fellows 201?").toLowerCase();
if(answer5 === 'yes' || answer5 === 'y'){
  alert("You bet! " +username +", and you nailed it!🔥");
  score = score+1;
  console.log(score);
  /*console.log('You are right - I like this class!');*/
} else{
  alert(username + ", you didn't get that right 🤭");
  /*console.log ('Oops. Can you try again?');*/
}

let FavNumber=7;
let guesses=4;

for (let i=0; i<guesses; i++){
  let answer6=prompt("What is my favorite number between 1-100? You have FOUR chances to get this right! Please respond in numerial numbers and not words.");
  if (answer6!==FavNumber && answer6<FavNumber){
    alert("Sorry! That number was TOO LOW 😌");
    answer6;
  } else if (answer6!==FavNumber && answer6>FavNumber){
    alert("Sorry! That number was TOO HIGH 🥵");
    answer6;
  } else{
    alert("Yes! you nailed it! 💯");
    score = score+1;
    console.log(score);
    {break};
  }
}
alert("My favorite number is 7.");


let favFlowers = ['sunflower','wisteria','hydrangea','rose','hyacinthus','lavendar'];
let attempts=6;
let match = false;

for (let i=0; i<attempts; i++){
  let answer7=prompt("What's my favorite flower?").toLowerCase();
  for (let j=0; j<favFlowers.length;j++){
    if (answer7===favFlowers[j]){
      match = true; 
    } 
  }

  if (!match){
    //console.log("wrong");
    alert ("Sorry! That's not my favorite flower 🌸");
    answer7;
  } else {
    //console.log("right");
    alert("WOW! How did you know my favorite flower. You nailed it! 🌸");
    score=score+1;
    console.log(score);
    {break};
  }
}
alert("Here are all my favorite flowers: 1. sunflower; 2. wisteria; 3. hydrangea; 4. rose; 5. hyacinthus 6. lavendar :)");

alert("Great job, "+username+"! Your final score is "+score + " out of 7.");

//Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
