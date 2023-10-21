let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let newCardEl = document.getElementById("newCard-el");
let playerEl = document.getElementById("player-el");
let player = {
    name : "Nilesh",
    chips : 200

};
let sum = 0;
let cardsArr = [];
let isAlive = false;
let isBlackJack = false;


playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    firstCard = getRandomNumbers();
    secondCard = getRandomNumbers();
    cardsArr = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function getRandomNumbers(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if( randomNumber === 1){
        return 11;
    }else if(randomNumber > 11){
        return 10;
    }else{
        return randomNumber;
    }
}


function renderGame(){

    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cardsArr.length; i++){
        
        cardsEl.textContent += cardsArr[i] + " ";
    }
    sumEl.textContent = "Sum: "+ " " + sum ;
    if(sum > 21){
        message =  "you are out of the game";
        isAlive = false;
    }else if(sum === 21){
        message =  "you got a Black Jack";
        isBlackJack = true;
    }else{
        message =  "You can Draw a new Card?";
    }
    messageEl.textContent = message;
}



function newCard(){

    if(isAlive === true && isBlackJack === false){
        
        let card = getRandomNumbers();
        cardsArr.push(card);
        sum += card; 
        renderGame();
    }
}