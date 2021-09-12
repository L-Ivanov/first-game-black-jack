let cards = [];
console.log(cards);
let sum = 0;
console.log(sum);
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message');
let messageElSum = document.getElementById('sum');
let cardsEl = document.getElementById('cards');

let player = {
    name : "Arcana",
    chips : 100
}
let playerEl = document.getElementById('player');
playerEl.textContent = player.name + ": $ "+ player.chips;

// let messageElSum = document.querySelector('#sum');
// //# -> that way we tell querySelector that sum has id;
// //if it is a class, we use . instead of #
function renderGame(){
    messageElSum.textContent="Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    let a = "";
    for(i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+ ", ";
    }

    if(sum<=20){
        message= "Do you want to draw a new card?";
        isAlive=true;

    }else if(sum === 21){
        message = "Congratulations, you have Blackjack";
        hasBlackJack=true;
        isAlive=true;
    }else{
        isAlive=false;
        message = "You are out of the game, please try again";

    }

    // console.log(hasBlackJack);
    // console.log(message);
    // conssole.log(message1);
    messageEl.textContent= message;

}
function newCard(){

    if(isAlive === true && hasBlackJack===false){
        let card = getRandomCard();
        let newCardEl = document.getElementById('new');
        newCardEl.textContent="New card:" + card;
        sum+=card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }




}
function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard+secondCard;
    isAlive=true;
    renderGame();
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber===1){
        return 11;
    }else if(randomNumber>10){
        return 10;
    }else{
        return randomNumber;
    }

}