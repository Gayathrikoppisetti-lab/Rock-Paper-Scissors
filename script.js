let playerScore=0;
let computerScore=0;
const choices=document.querySelectorAll('.choice');
const message=document.querySelector("#message");

const playerScorePara=document.querySelector("#player-score");
const computerScorePara=document.querySelector("#computer-score");


const getComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame=()=>{
   
    message.innerText="It's a draw!";
    message.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        
        playerScore++;
        playerScorePara.innerText=playerScore;
        message.innerText=`You win! your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor="green";
    }else{
        
        computerScore++;
        computerScorePara.innerText=computerScore;
        message.innerText=`You Lose! ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice is", userChoice);
    const computerChoice=getComputerChoice();
    console.log("computer choice is", computerChoice);

    if(userChoice===computerChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock" && computerChoice==="paper"){
            userWin=false;
        }else if(userChoice==="paper" && computerChoice==="scissors"){
            userWin=false;
        }else if(userChoice==="scissors" && computerChoice==="rock"){
            userWin=false;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};    

choices.forEach((choice)=>{  
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    });
});