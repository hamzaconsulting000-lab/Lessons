// const cal = document.getElementsByClassName("container-fluid");

// let button = document.createElement("button");
// button.innerText = "1";
// console.dir(cal);
// console.dir(button, button.innerText);
// cal.appendChild(button);let div = document.createElement("div");
function creation {
    let p = document.createElement("p");
    let span = document.createElement("span");
    div.append(p);
    div.prepend(span);

    console.log(div.childNodes); // NodeList [ <span>, <p> ]
};