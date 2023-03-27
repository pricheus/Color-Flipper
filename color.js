const colors = ["green", "red", "rgba(133,122,200)","#f15025"];

const button = document.getElementById('clickMe');
const color = document.querySelector('.color')

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}

button.onclick= function () { 
const randomNumber = getRandomNumber();
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
};

