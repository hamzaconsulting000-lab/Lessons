

/*let a = prompt("your bank balance?");

if (a >= 1000000 && a ==1000000){
    console.log("You are rich")
}else if (a <= 999999 && a >= 500000){
    console.log("You are middle class") 
}else if (a <= 499999 && a >= 100000){
    console.log("You are lower class")
}else if(a <= 99999 && a >= 0){
    console.log("You are broke")
}else{
    console.log("rich beyond")
};

console.log(a);


//                  loops



for (let i = 0; i <= 10000; i++){   
    console.log("SRTING");
}
 console.log("LOOP ENDED");


let sum = 0;

//         Example of for loop to calculate the sum of first 5 natural numbers

for (let i = 1; i <= 5; i++){
    sum += i;
}
console.log(sum);
console.log("LOOP ENDED");

for (let i = 0; i <= 10; i++){   
     console.log("SRTING" ,i);
}  


//                  infinite loop


//for (let i = 0; i >= 0; i++){
      console.log("INFINITE LOOP", i);
    }


//                  while loop


let i = 1;
while (i <= 5){  
     console.log("LOOPING", i);
     i++; 
}


//                   Do while loop


let j = 1;
   do {
     console.log("DO WHILE LOOP", j);
       j++;
   } while (j <= 0);




//                     for-of loop

let i = "SIRI";
let size = 0;

for(let j of i){
    console.log(j);
    size++;
}
console.log("the size of the string is", size);



//                     for-in loop

let student = {
    name:"hamza",
    marks:99,
    is:true,
    rollNo:21
};
let size = 0;

for(let j in student){
    console.log(student[j], j);  
    size++;
}
console.log("the size of the string is", size);


//         program to find the sum of all even numbers between 1 to 100.


 for ( let num=0;num<=100;num++){
    if (num%2 === 0){
    console.log("num is",num);
       
    }
    
 };


//                  loop game


let a = prompt("enter a number");
let b = 64;

while (a != b){
  a = prompt("Entry again")
  console.log(a);
};
alert("you won");


//                   template literas


let person ={
    name:"hamza",
    age:21,
    course:"AI"
}
let str = person.name.trim();
console.log(`his name is \n${person.name} and he is ${person.age} years old and he is a student of ${person.course}`);
console.log(a.trim());


//                     example of for loop to print even numbers between 1 to 100


for (let i = 1; i <=100; i++) {
  if (i % 2 == 0 ) {
    console.log(i);
  }
}

let num = 0;
while (num <= 100){
  if (num % 2 == 0 ) {
    console.log(num);
  }
  num++;
}

let a = prompt("Enter a name");
console.log(`@${a.trim().toLowerCase()}${a.length}`);
 

//                     array


let arr = [10,20,30,40,50];     

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}   

let arr = [
  10,
  20,
  30,
  40,
  50
];
arr[3] = 100;
console.log(`arry is ${arr}`);
console.log(`${typeof arr} , ${arr.length} , ${arr[4]}`);


//                array loop


let fruit = ["mango", "apple", "banana", "orange", "grapes"];

for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}


//                array for-of loop


let price = [250 , 645 , 300 , 900 , 50];
let idx = 0;
for(let i of price){
  console.log(`item is ${idx} at price ${i}`);
  idx++;
  i =  i - (i/10);
  console.log(`discounted price is ${i}`);
}



//                array Methods


let arr = [10,20,30,40,50];
arr.push(60);
arr.pop();
arr.shift();
arr.unshift(5);
console.log(arr);


let company = ["Google", "Apple", "Microsoft", "Amazon", "Facebook"];
company.shift();
company.splice(2,1,"spacex");
company.push("Tesla");
console.log(company); 



//                functions



function greet(name){
    console.log(`Hello, ${name}!`);
}
greet("hamza");


function add(a,b){ 
    return a + b;
}
console.log(add(10,20));


const funcnam = function(name){
    console.log(`Hello, ${name}!`);
}


function count(str){
    let count = 0;
    for (const char of str) {
       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++;
       }
        
    }
    return(count);
}


const count= function(str){
     let count = 0;
    for (const char of str) {
       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++;
       }
        
    }
    return(count);
}



//               This is a higher order function/method array forEach loop


let arry= [10,20,30,40,50];
arry.forEach((a,b,c)=>{
    console.log(`first param is VAL ${a} and Second param is Index ${b}`);
    console.log(c);
});

let num = [2,3,4,5,6];
let sum = 0;
num.forEach((val)=>{
    sum = val * val;
   console.log(sum); 
});


let newarr = [10,20,30,40,50];
let newarr2 = newarr.map((val)=>{
    return val * val;
});
console.log(newarr); 
console.log(newarr2);

let arr = [1,0,11,32,98];
const newarry = arr.reduce((acc, val)=>{    
    return acc - val; 
})
console.log(newarry);

let arry= [97,65,99,55,62,80,85];
let newarrt = arry.filter((val)=>{
    return val > 90 ;
})
console.log(newarrt);


//                     example questions

    
let n = prompt("enter a num")

let arr = [];
for (let i = 0 ; i <= n ; i++){
    console.log(i);
}


//                           DOM manipulation


let head = document.getElementById("heading");
console.dir(head);
let para = document.getElementById("paragraph");
console.log(para);
let head2 = document.getElementsByTagName("h2");
console.dir(head2);
console.log(head2);
let head3 = document.getElementsByClassName("heading");
console.log(head3);


let heading = document.getElementById("heading");
console.log(heading.textContent= "JavaScript is fun");
console.dir(heading);
;

let h1 = document.querySelector("h1");
h1.innerText = h1.innerText + " is fun";
console.dir(h1.innerText);

let div = document.querySelectorAll(".box");
// boxy[0].textContent = "BOX";
// boxy[1].textContent = "BOX";
// boxy[2].textContent = "BOX";
let index = 0;
for (let i = 0; i < div.length; i++){
    div[i].textContent = `BOX ${index}`;
    index++;
}
console.log(div); 

let body = document.querySelector("body");
body.style.backgroundColor = "white";
let btn = document.createElement("button");
btn.innerText = "click me";
body.appendChild(btn);
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.style.cursorhover = "pointer";
btn.style.margin ="10px";
btn.style.padding = "10px 20px";
btn.style.border = "solid , black , 1px";
btn.style.cursor = "pointer";
btn.style.fontFamily = "Arial, sans-serif";
btn.style.fontSize = "16px";
btn.style.fontWeight = "bold";
btn.style.textTransform = "uppercase";
btn.style.transition = "background-color 0.3s ease";
btn.onclick = () => {
    if(body.style.backgroundColor === "white"){
    let body = document.querySelector("body");
    body.style.backgroundColor = "black";
    }else if(body.style.backgroundColor === "black"){
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";
    }
}

document.querySelector("button");


function changeColor(){
    if(body.style.backgroundColor === "white"){
    let body = document.querySelector("body");
    body.style.backgroundColor = "black";
    }else if(body.style.backgroundColor === "black"){
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";
    }
}



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
    Nopattern();
   
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


//             classes and objects


class carcompany{
    constructor(company, speed){
        this.company = company;
        this.speed = speed;
        console.log(`brand is ${company} & milage is ${speed}`);
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

const Honda = new carcompany("honda", 87);
let toyota = new carcompany("Toyota", 64);


class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep();  // 'zzzzzzz' ;

class user {
    constructor(name , email){
        this.name = name;
        this.email = email; 
    }
    viewdata (){
        console.log(`Your name is ${this.name} & Your email is ${this.email}`)
    }
}
class Admin extends user{
     constructor(name , email){
        super(name , email);
     }
     Editdata(){
        let chemistry_student = prompt("Edit name");
        let inputEmail = prompt("editEmail");
        this.name = inputname
        console.log(inputname) ;
     }
}
let chemistry_student = new Admin("ubaid", "Ubaid3425@gmail.com");
let science_student = new user ("khizar" , "khizar0043@gmail.com");
let computer_student = new user("hamza" , "hamza.consulting000@gmail.com");


 
//                  promises


function asyncfunc1() {
   return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("data collected");         
        }, 2000);
       
    })
}

function asyncfunc2() {
   return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("data collected");         
        }, 2000);
       
    })
}

console.log("loading_1...");
asyncfunc1().then((res) => {
   console.log("loading_2...");
   asyncfunc2().then((res) => {})
})



function asyncfunc1(thisdata) {
   return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data" , thisdata);
            resolve("data collected");         
        }, 2000);
       
    })
}

//                   syntax one


let p1 = asyncfunc1();
asyncfunc1("data1").then((res) => {
    console.log(res);
    asyncfunc1("data2").then((res) => {
        console.log(res);
        asyncfunc1("data3").then((res) => {
            console.log(res);
        })
    })
})


//                   syntax two


asyncfunc1(1)
.then((res) => {
    return asyncfunc1(2);
})
.then ((res) => {
    return asyncfunc1(3);
});


//                   syntax await


async function api() {
    await asyncfunc1(1);
    await asyncfunc1(2);
    await asyncfunc1(3);
}
console.log(api());


//                   IIFE syntax


(async function () {
    await asyncfunc1(1);
    await asyncfunc1(2);
    await asyncfunc1(3);
}));



//                   API - Application programming interface


const URL = "https://dummyjson.com/products";
const des = document.querySelector("#fact");
let btn = document.querySelector("#fetch-btn");


const getdata = async () => {
    console.log("loading...");

    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();
    console.log(data, data.products[5]);

    des.innerText = data.products[5].title;
//    des.innerText = JSON.stringify(data.products[5], null, 2);
};

btn.addEventListener("click", getdata);
*/


const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYN: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VES: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

const Base = "https://api.frankfurter.dev/v2/rate";

const Dropdowns = document.querySelectorAll(".exchange select");

// Populate both dropdowns
for (let select of Dropdowns) {

    for (let code in countryList) {

        let option = document.createElement("option");

        option.value = code;
        option.innerText = code;

        select.appendChild(option);

        // Default From = USD
        if (select.name === "from" && code === "USD") {
            option.selected = true;
        }

        // Default To = PKR
        if (select.name === "to" && code === "PKR") {
            option.selected = true;
        }
    }
}


// Get HTML elements
const btn = document.querySelector(".submit");
const fromCode = document.querySelector("#fromdropdown");
const toCode = document.querySelector("#todropdown");
const amountInput = document.querySelector("#Amount");


// Convert button
btn.addEventListener("click", async (event) => {

    event.preventDefault();

    // Get amount
    let amountValue = Number(amountInput.value);

    // If empty or less than 1
    if (!amountValue || amountValue < 1) {
        amountValue = 1;
        amountInput.value = "1";
    }


    // Get currencies
    const from = fromCode.value;
    const to = toCode.value;


    // Build API URL
    const URL = `${Base}/${from}/${to}`;

    console.log("API URL:", URL);

    fetch(URL)
    .then((response)=> {
        if (response.ok){
            return response.json();
        }
    }).then((data)=> {
        console.log("API Data:", data);
        return data.rate
    }).then((rate)=> {
        console.log("Exchange Rate:", rate);
        // Calculate conversion
        let convertedAmount = amountValue * rate;
        console.log("converted Amount:", convertedAmount);
         
        // show result
       let final_result = document.querySelector("#result");
       final_result.innerText = `${amountValue} ${from} = ${convertedAmount} ${to}`;
    
    }).catch ((error) =>{
        let final_result = document.querySelector("#result");
        console.error("Currency conversion failed:", error);
        final_result.innerText = "Rates not available";

    })
    


    // try {

    //     // Fetch API
    //     const response = await fetch(URL);

    //     // Check HTTP status
    //     if (!response.ok) {
    //         throw new Error(`HTTP error: ${response.status}`);
    //     }


    //     // Convert response to JSON
    //     let data = await response.json();

    //     console.log("API data:", data);


    //     // Get exchange rate
    //     let rate = data.rate;


    //     // Calculate conversion
    //     const convertedAmount = amountValue * rate;


    //     // Show result
    //     let final_result = document.querySelector("#result");

    //    console.log(
    //         `${amountValue} ${from} = ${convertedAmount.toFixed(2)} ${to}`
    //     );
    //     final_result.innerText = `${amountValue} ${from} = ${convertedAmount} ${to}`;
        

    // } 
    // catch (error) {
    //     let final_result = document.querySelector("#result");
    //     console.error("Currency conversion failed:", error);
    //     final_result.innerText = "Rates not available";

    // }


    
});
// const Dropdowns = document.querySelectorAll("select");
// for (let select of Dropdowns){
// for (let code in countryList){
//     // console.log(countryList[code]);

//     let option1 = document.createElement("option");
//     option1.value = code;
//     option1.innerText = `${code}`;
//     select.appendChild(option1);

//     if(select.name === "from" && code === "USD"){
//         option1.selected = true;
//     }
//     if(select.name === "to" && code === "PKR"){
//         option1.selected = true;
//     }
 
//  };
// }; 

// const btn = document.querySelector(".submit")
// const fromCode = document.querySelector("#fromdropdown")
// const toCode = document.querySelector("#todropdown")

// btn.addEventListener("click", async (event) => {
//     event.preventDefault();
//     // Add conversion logic here
//     let amount = document.querySelectorAll("input")[0];
//     let amountValue = amount.value;
//     if (amountValue === "" || amountValue < 1){
//         amountValue = 1;
//         amount.value = "1";
//     }

//     const URL = `${Base}?base=${fromCode.value}&symbols=${toCode.value}`;
//     let result = await fetch(URL);

//     if (!result.ok) {
//         throw new Error(`HTTP error: ${result.status}`);
//     }

//     let data = await result.json();

//     console.log(data);

//     let rate = data.rates[toCode.value];

//     let convertedAmount = amountValue * rate;

//     console.log(`${amountValue} ${fromCode.value} = ${convertedAmount} ${toCode.value}`);


//     console.log(amountValue);
//     console.log(btn);
//     console.dir(btn);
//     console.log(fromCode.value);
//     console.dir(fromCode);
//     console.log(toCode.value);
//     console.dir(toCode);
//     console.log(URL);
//     console.log(result)
// })
// for (let code of countryList){
//     console.log(code);
// }

// 
// let optionTag = `<option value="${code}">${code}</option>`;
// dropdowns[0].insertAdjacentHTML("beforeend", optionTag);
// dropdowns[1].insertAdjacentHTML("beforeend", optionTag);