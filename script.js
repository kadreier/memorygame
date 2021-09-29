const gameContainer = document.getElementById("game");
let score=0;
let matched=0;
let clicks=0
let firstPick;
let secondPick;
let timer;



const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function scoring(currentScore){
  score=currentScore;
  document.getElementById("score").innerText= "Score: " + score;
}

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  let card=event.target;
  card.style.backgroundColor=card.className;
  

  if(clicks===2){
    
    clicks-=2;
   
  }

  if(clicks===0){
    clicks++;
    firstPick=card;
    scoring(score+1)
  
    
  }else{
    clicks++;
    secondPick=card;
    scoring(score+1)
  
    

    timer= setTimeout(function(){
     
      if (firstPick.className===secondPick.className){
        matched+=2
        if(matched===COLORS.length) alert("Game Over!!" + " Score: " + score);
        console.log(matched)
        clearTimeout(timer)
      }else{
        firstPick.style.backgroundColor="";
        secondPick.style.backgroundColor="";
      ;
     
    }}, 1000);
  }
  
};

// when the DOM loads
createDivsForColors(shuffledColors);
