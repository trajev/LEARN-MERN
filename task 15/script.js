let redDiv = document.querySelector("#red-box");
let greenDiv = document.querySelector("#green-box");
let blueDiv = document.querySelector("#blue-box");
let yellowDiv = document.querySelector("#yellow-box");

const header = document.querySelector("header");
let input = document.querySelector("#input");
const button = document.querySelector("button");

button.addEventListener( "click",  ()=>{
    if( input.value===null || input.value==="" ){
        header.innerText = "Hello" ;
    } else {
        header.innerText = "Hello, " + input.value;
    }
} )




redDiv.addEventListener("click", ()=>{
    redDiv.style.backgroundColor = "red";
    redDiv.style.color = "white";
    redDiv.style.border = "1px solid white";
})

blueDiv.addEventListener("click", ()=>{
    blueDiv.style.backgroundColor = "blue";
    blueDiv.style.color = "white";
    blueDiv.style.border = "1px solid white";
})

greenDiv.addEventListener("click", ()=>{
    greenDiv.style.backgroundColor = "green";
    greenDiv.style.color = "white";
    greenDiv.style.border = "1px solid white";
})

yellowDiv.addEventListener("click", ()=>{
    yellowDiv.style.backgroundColor = "yellow";
    yellowDiv.style.border = "1px solid white";
})

