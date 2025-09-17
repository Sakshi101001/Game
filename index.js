let userScore=0;
let compScore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const compScoreDisplay=document.querySelector('#compScore');
const userScoreDisplay=document.querySelector('#userScore');

// Computers Choice

// generate computer's choice
const genComputerChoice=()=>{
    const options=['stone','paper','scissor'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame=(userChoice)=>{
    console.log("User's choice is",userChoice);
    const compChoice = genComputerChoice();
    console.log("Computer's choice is",compChoice);


    if(userChoice===compChoice){
        msg.innerHTML=`<h2>It's a tie! </h2>`;
    }
    else if(
        (userChoice==='stone'&& compChoice==='scissor')||
        (userChoice==='paper'&& compChoice==='stone')||
        (userChoice==='scissor'&& compChoice==='paper')){
            userScore++;
            userScoreDisplay.innerHTML=userScore
            msg.innerHTML=`<h2>You Won!</h2>`;
        }
        else{
            compScore++;
            compScoreDisplay.innerHTML=compScore
            msg.innerHTML=`<h2>You Lost!</h2>`;
        }
}



// User's Choice
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id")
        // console.log("Choice was clicked")
    playGame(userChoice);
    })
})