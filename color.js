//colors
const colors = ['red','blue','cyan','grey','green','pink','yellow']

//interactive elements
const button = document.getElementById('clickMe');
const changeColor = document.getElementById('changeColor');
const backGroundColor = document.getElementById('mainContainer');


// funstions

let randomNumber = 0;

console.log(randomNumber)
//eventListener
button.onclick = function(){
     randomNumber = Math.floor( Math.random() * colors.length)
    changeColor.textContent = colors[randomNumber];
    backGroundColor.style.background = colors[randomNumber];
};
