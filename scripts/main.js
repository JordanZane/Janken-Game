let signs = ["Rock","Paper","Scissors"];

let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorsBtn = document.querySelector("#scissors-btn");

let btnsRow = document.querySelector(".button-row");
let btnsContainer = document.querySelectorAll(".button-row > .col-lg-2");

let playerScore = 0;
let computerScore = 0;

let currentPlayerScore = playerScore;
let currentcomputerScore = computerScore;

let currentPlayerScoreElement = document.querySelector("#score-number-you > p");
let currentComputerScoreElement = document.querySelector("#score-number-computer > p");

let playerScoreJson = localStorage.getItem("Player Score");
playerScore = JSON.parse(playerScoreJson);
let computerScoreJson = localStorage.getItem("Computer Score"); 
computerScore = JSON.parse(computerScoreJson);

if (playerScoreJson === null) {
    playerScore = 0;
  } else {
    playerScore = JSON.parse(playerScoreJson);
  }
  
  if (computerScoreJson === null) {
    computerScore = 0;
  } else {
    computerScore = JSON.parse(computerScoreJson);
  }

currentPlayerScoreElement.innerText = playerScore;
currentComputerScoreElement.innerText = computerScore;

rockBtn.addEventListener("click", function(){
    let randomSign = Math.floor(Math.random() * signs.length);
    let computerSign = signs[randomSign];

    let resultContainer = document.createElement("div");
    resultContainer.classList.add("results-container", "col-lg-6");
    let resultContent = document.createElement("p");
    let playerChooseElement = document.createElement("i");
    playerChooseElement.classList.add("fa-sharp", "fa-solid", "fa-hand-back-fist")
    let computerChooseElement = document.createElement("i");
    let btnRetry = document.createElement("button");
    btnRetry.innerText = "Retry";
    btnRetry.id = "btn-retry";

    btnsRow.appendChild(resultContainer);
    resultContainer.appendChild(resultContent);
    resultContainer.appendChild(playerChooseElement);
    resultContainer.appendChild(computerChooseElement);
    resultContainer.appendChild(btnRetry);
    
    for (i = 0; i < btnsContainer.length; i++){
        btnsContainer[i].style.display = "none";
    }

    if(computerSign == "Rock"){
        computerChooseElement.classList.add("fa-sharp", "fa-solid", "fa-hand-back-fist");
        resultContent.innerHTML = "Egalité !";
    }

    if(computerSign == "Paper"){
        computerChooseElement.classList.add("fa-solid", "fa-hand");
        resultContent.innerHTML = "Perdu !";
        computerScore = computerScore +1;
    }

    if(computerSign == "Scissors"){
        computerChooseElement.classList.add("fa-solid", "fa-hand-scissors");
        resultContent.innerHTML = "Gagné !";
        playerScore = playerScore +1;
    }

    currentPlayerScoreElement.innerText = playerScore;
    currentComputerScoreElement.innerText = computerScore;
    localStorage.setItem("Player Score", playerScore);
    localStorage.setItem("Computer Score", computerScore);

    btnRetry.addEventListener("click", function(){
        for (i = 0; i < btnsContainer.length; i++){
            btnsContainer[i].style.display = "block";
        }
        btnsRow.removeChild(resultContainer);
        resultContainer.removeChild(resultContent);
        resultContainer.removeChild(playerChooseElement);
        resultContainer.removeChild(computerChooseElement);
        resultContainer.removeChild(btnRetry);
    })
})

paperBtn.addEventListener("click", function(){
    let randomSign = Math.floor(Math.random() * signs.length);
    let computerSign = signs[randomSign];

    let resultContainer = document.createElement("div");
    resultContainer.classList.add("results-container", "col-lg-6");
    let resultContent = document.createElement("p");
    let playerChooseElement = document.createElement("i");
    playerChooseElement.classList.add("fa-solid", "fa-hand")
    let computerChooseElement = document.createElement("i");
    let btnRetry = document.createElement("button");
    btnRetry.innerText = "Retry";
    btnRetry.id = "btn-retry";

    btnsRow.appendChild(resultContainer);
    resultContainer.appendChild(resultContent);
    resultContainer.appendChild(playerChooseElement);
    resultContainer.appendChild(computerChooseElement);
    resultContainer.appendChild(btnRetry);
    
    for (i = 0; i < btnsContainer.length; i++){
        btnsContainer[i].style.display = "none";
    }

    if(computerSign == "Rock"){
        computerChooseElement.classList.add("fa-sharp", "fa-solid", "fa-hand-back-fist");
        resultContent.innerHTML = "Gagné !";
        playerScore = playerScore +1;
        
    }

    if(computerSign == "Paper"){
        computerChooseElement.classList.add("fa-solid", "fa-hand");
        resultContent.innerHTML = "Egalité !";
    }

    if(computerSign == "Scissors"){
        computerChooseElement.classList.add("fa-solid", "fa-hand-scissors");
        resultContent.innerHTML = "Perdu !";
        computerScore = computerScore +1;
    }

    currentPlayerScoreElement.innerText = playerScore;
    currentComputerScoreElement.innerText = computerScore;
    localStorage.setItem("Player Score", playerScore);
    localStorage.setItem("Computer Score", computerScore);

    btnRetry.addEventListener("click", function(){
        for (i = 0; i < btnsContainer.length; i++){
            btnsContainer[i].style.display = "block";
        }
        btnsRow.removeChild(resultContainer);
        resultContainer.removeChild(resultContent);
        resultContainer.removeChild(playerChooseElement);
        resultContainer.removeChild(computerChooseElement);
        resultContainer.removeChild(btnRetry);
    })
})

scissorsBtn.addEventListener("click", function(){
    let randomSign = Math.floor(Math.random() * signs.length);
    let computerSign = signs[randomSign];

    let resultContainer = document.createElement("div");
    resultContainer.classList.add("results-container", "col-lg-6");
    let resultContent = document.createElement("p");
    let playerChooseElement = document.createElement("i");
    playerChooseElement.classList.add("fa-solid", "fa-hand-scissors")
    let computerChooseElement = document.createElement("i");
    let btnRetry = document.createElement("button");
    btnRetry.innerText = "Retry";
    btnRetry.id = "btn-retry";

    btnsRow.appendChild(resultContainer);
    resultContainer.appendChild(resultContent);
    resultContainer.appendChild(playerChooseElement);
    resultContainer.appendChild(computerChooseElement);
    resultContainer.appendChild(btnRetry);
    
    for (i = 0; i < btnsContainer.length; i++){
        btnsContainer[i].style.display = "none";
    }

    if(computerSign == "Rock"){
        computerChooseElement.classList.add("fa-sharp", "fa-solid", "fa-hand-back-fist");
        resultContent.innerHTML = "Perdu !";
        computerScore = computerScore +1;
        
    }

    if(computerSign == "Paper"){
        computerChooseElement.classList.add("fa-solid", "fa-hand");
        resultContent.innerHTML = "Gagné !";
        playerScore = playerScore +1;
        
    }

    if(computerSign == "Scissors"){
        computerChooseElement.classList.add("fa-solid", "fa-hand-scissors");
        resultContent.innerHTML = "Egalité !";
    }

    currentPlayerScoreElement.innerText = playerScore;
    currentComputerScoreElement.innerText = computerScore;
    localStorage.setItem("Player Score", playerScore);
    localStorage.setItem("Computer Score", computerScore);

    btnRetry.addEventListener("click", function(){
        for (i = 0; i < btnsContainer.length; i++){
            btnsContainer[i].style.display = "block";
        }
        btnsRow.removeChild(resultContainer);
        resultContainer.removeChild(resultContent);
        resultContainer.removeChild(playerChooseElement);
        resultContainer.removeChild(computerChooseElement);
        resultContainer.removeChild(btnRetry);
    })
})

let resetScoresBtn = document.querySelector("#reset-score-btn");
resetScoresBtn.addEventListener("click", function(){
    localStorage.removeItem("Player Score");
    localStorage.removeItem("Computer Score");
    playerScore = 0;
    computerScore = 0;
    currentPlayerScoreElement.innerText = playerScore;
    currentComputerScoreElement.innerText = computerScore;
})


   

    





