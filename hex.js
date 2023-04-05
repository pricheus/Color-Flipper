//colors
const colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F' ]

//interactive elements
const button = document.getElementById('clickMe');
const changeColor = document.getElementById('changeColor');
const backGroundColor = document.getElementById('mainContainer');


// functions
function getRandomNumber (){
return Math.floor( Math.random() * colors.length);
};


//eventListener
button.onclick = function(){
  let hex =  '#'; 
  
  for(let i=0; i<6; i++){
    hex += colors[getRandomNumber()]
  };
    changeColor.textContent = hex;
    backGroundColor.style.background = hex;
};