let input = document.querySelector(".input_value");
let sub_btn = document.querySelector(".btn_submit");
let res_btn = document.querySelector(".btn_reset");
let msg = document.querySelector(".msg");
let misses = document.querySelector("#Misses");
let guess = document.querySelector("#Guesses");

let robot = () => {
    return Math.floor(Math.random()* 100);
}

let computerValue = robot();

let myval = (input_val) => {
    console.log(computerValue);

    if(input_val == computerValue){
        msg.innerText = "Guessed Right";
        console.log("Guessed Right");
        msg.style.color = "rgb(13, 219, 13)";
        guess.innerText ++;
        sub_btn.style.backgroundColor = "darkgreen";
        sub_btn.disabled = true;
    } 
    else if (input_val < computerValue && computerValue - input_val >= 20 ){
        msg.innerText = "too low";
        console.log("too low");
        msg.style.color = "yellow";
        misses.innerText ++;
    }
    else if (input_val > computerValue && input_val - computerValue  >= 20 ){
        msg.innerText = "too high";
        console.log("too high");
        msg.style.color = "orange";
        misses.innerText ++;
    }
    else{
        msg.innerText = "guessed Wrong"
        console.log("Guessed Wrong");
        msg.style.color = "rgb(250, 5, 5)";
        misses.innerText ++;
    }

}

sub_btn.addEventListener("click", (my_val) => {
    let input_val = input.value;
    console.log("button clicked");
    console.log(input_val);
    myval(input_val)

})
res_btn.addEventListener("click" , () =>{
    sub_btn.disabled = false;
    // misses.innerText = 0 ;
    // guess.innerText = 0 ;
    msg.innerText = "";
    input.value = "";  
    sub_btn.style.backgroundColor = "rgb(13, 219, 13)";
    computerValue2 = Math.floor(Math.random()* 100);
    computerValue = computerValue2;
    console.log(computerValue2);
})