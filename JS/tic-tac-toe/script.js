
//                     tic tac toe game




let box = document.querySelectorAll(".box");

let reset = document.getElementById("reset");

let turn = true;

let wining_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] 

box.forEach(box => {
    box.addEventListener("click", ()=>{
    console.log("button was clicked");
    if(turn){
        box.innerText = "X";
        box.style.color = "green"
        turn = false;
    }else{
        box.innerText = "O";
        box.style.color = "red";
        turn = true;
    }
    box.disabled = true;
    pattern();
    // Nopattern();
   
})
});

const pattern = () => {
    for(let i of wining_combinations){
        console.dir(
            box[i[0]].innerText,
            box[i[1]].innerText,
            box[i[2]].innerText);
        if(box[i[0]].innerText !== "" && box[i[0]].innerText === box[i[1]].innerText && box[i[1]].innerText === box[i[2]].innerText){
            box.forEach(box => box.disabled = true);
            box[i[0]].style.backgroundColor = "black";
            box[i[1]].style.backgroundColor = "black";
            box[i[2]].style.backgroundColor = "black";
            alert(`${box[i[0]].innerText} wins`);
        } 
    
    }
   
}

const Nopattern = () => {
    for(let i of wining_combinations){
        console.dir(
            box[i[0]].innerText,
            box[i[1]].innerText,
            box[i[2]].innerText);
        if(box[i[0]].innerText !== "" && box[i[0]].innerText === box[i[1]].innerText && box[i[1]].innerText !== box[i[2]].innerText){
           
            alert(`${box[i[0]].innerText} draws`);
        } 
    
    }
   
}

function resetGame(){
    console.log("reset button was clicked");
    box.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        
    })  
    turn = true;
    for(let i of wining_combinations){
    box[i[0]].style.backgroundColor = "white";
    box[i[1]].style.backgroundColor = "white";
    box[i[2]].style.backgroundColor = "white";
     }}

reset.addEventListener("click", resetGame);

