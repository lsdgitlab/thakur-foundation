let raceNumber = Math.floor(Math.random()*1000);
// console.log(raceNumber);
const registeredEarly = true;
const ageOfRunner = 20;

if(ageOfRunner >18 && registeredEarly)
    {raceNumber += 1000
        // console.log(raceNumber);
    };

if(raceNumber > 1000) {
  // console.log("The runner with number over 1000 will start race at 9:30.") 
}
else if(ageOfRunner > 18 && !registeredEarly ) { 
  console.log("The other adult runner over 18 years old will start race at 11:00.") 
}
else if(raceNumber > 1000 && ageOfRunner < 18)
{ 
  console.log("Youth registrants will start race at 12:30.") }
else {console.log("Please come to the registration desk.") };


// guess number HTML is being used here

let chgInptBtn = document.querySelector('button');
chgInptBtn.addEventListener('click', chnageInput);

 function chnageInput(){
  let name = prompt('Enter your Name');
  chgInptBtn.innerHTML = "Roll Number is 13 " + name

 }
// console.log(chgInptBtn);

// 1 sol :- 
// const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
// const listItem = famousSayings[0];

// console.log(listItem);
// console.log(famousSayings[2]);

// const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
// const listItem = famousSayings[0];

// console.log(listItem);
// console.log(famousSayings[2]);
// console.log(famousSayings[3]);

// const isLoggedIn = true;

// let isLog =function (){
//   if (isLoggedIn == true) {
//     const statusMessage = 'User is logged in.';
//     this.sendToPa = function(){
//       return statusMessage;
//     }
//   }
// }

// let result = new isLog();

// console.log(result.sendToPa());

// function chckvarLog(){
//   const statusMessage = 'User is logged in.';
//   return function(){
//     console.log(statusMessage);
//   }
// }

// let testLogIn = chckvarLog();
// testLogIn();

// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// condiments[0] = 'Mayo'
// console.log(condiments);
// condiments = ['Mayo'];
// console.log(condiments);

// utensils[3] = 'Spoon';

// console.log(utensils);

// const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

// console.log(objectives.length);

// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// groceryList.shift();

// // console.log(groceryList);

// groceryList.unshift('popcorn');

// console.log(groceryList);

// console.log(groceryList.slice(1, 5));

// // console.log(groceryList);

// const pastaIndex = groceryList.indexOf('pasta');

// // console.log(pastaIndex);

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement (newArr) {
  newArr.pop();
}
removeElement  (concept);

console.log(concept);

