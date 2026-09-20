
//                rock paper sciccors

let yourScore = document.getElementById("your-score");
let compScore = document.getElementById("comp-score");
let msg = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

const gencompchoice = () => {
    const option = ["rock","paper","scissors"];
    const rnd = Math.floor(Math.random()*3);
    return option[rnd];
}

const mymove = (userchoice) =>{
    console.log(`user choice = ${userchoice}`)
    const compchoice = gencompchoice()
    console.log(`computer choice = ${compchoice}`)
     if( userchoice === compchoice){
        console.log("draw");
        msg.innerText="Draw"
    }else if(userchoice === "rock" && compchoice === "paper"){
        console.log("Computer wins");
        msg.innerText="Computer wins"
        compScore.innerText++
    }else if(userchoice === "paper" && compchoice === "scissors"){
        console.log("Computer wins");
        msg.innerText="Computer wins"
        compScore.innerText++
    }else if(userchoice === "scissors" && compchoice === "rock"){
        console.log("computer wins");
        msg.innerText="Computer wins"
        compScore.innerText++
    }else if(userchoice === "scissors" && compchoice === "paper"){
        console.log("User wins");
        msg.innerText="you win"
        yourScore.innerText++
    }else if(userchoice === "paper" && compchoice === "rock"){
        console.log("User wins");
        msg.innerText="you win"
        yourScore.innerText++
    }else if(userchoice === "rock" && compchoice === "scissors"){
        console.log("User wins");
        msg.innerText="you win"
        yourScore.innerText++
    }
    
}


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
    const userchoice = choice.getAttribute("id");
    console.log("button was clicked");  
    mymove(userchoice)
   
    })
})
