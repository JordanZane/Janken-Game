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

rockBtn.addEventListener("click", function(){
    let randomSign = Math.floor(Math.random() * signs.length);
    let computerSign = signs[randomSign];

    let resultContainer = document.createElement("div");
    resultContainer.classList.add("results-container", "col-lg-6");
    let resultContent = document.createElement("p");
    let playerChooseElement = document.createElement("i");
    playerChooseElement.classList.add("fa-sharp", "fa-solid", "fa-hand-back-fist")
    let computerChooseElement = document.createElement("i");
    btnsRow.appendChild(resultContainer);
    resultContainer.appendChild(resultContent);
    resultContainer.appendChild(playerChooseElement);
    resultContainer.appendChild(computerChooseElement);
    
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

    console.log(playerScore);
    console.log(computerScore);
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
    btnsRow.appendChild(resultContainer);
    resultContainer.appendChild(resultContent);
    resultContainer.appendChild(playerChooseElement);
    resultContainer.appendChild(computerChooseElement);
    
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
    btnsRow.appendChild(resultContainer);
    resultContainer.appendChild(resultContent);
    resultContainer.appendChild(playerChooseElement);
    resultContainer.appendChild(computerChooseElement);
    
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
})





