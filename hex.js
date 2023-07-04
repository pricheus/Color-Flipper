const colorStore = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
const btn = document.querySelector('button');
const colorName = document.querySelector('.colorName');
const body = document.querySelector('body');



btn.onclick = function(){
   let hex = '#';
    for(i=0; i<6 ; i++){
      hex += colorStore[getRandomNumber()]
    }
    
    colorName.innerHTML = hex;
    body.style.background = hex
}
  function getRandomNumber(){
  return   Math.floor(Math.random() * colorStore.length);
  }