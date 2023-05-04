//random based on hex colors
const hexList = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];
const btn =  document.querySelector('button');
const body = document.body;
const colorName =  document.querySelector('.colorName')

function randomNumber(){
  return Math.floor(Math.random() * hexList.length)
};

btn.onclick = function (){
    let hash = "#";
    for(let i=0; i<6 ; i++){
      hash += hexList[randomNumber()]
    }    
    body.style.backgroundColor = hash;
    colorName.innerHTML = hash;
};

