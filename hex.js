//List of colors
const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

//Interactive elements
const button = document.getElementsByClassName('button-clickMe')[0];
const changingColor = document.getElementById('changingColor');
const mainContainer = document.body;



// event on button
button.addEventListener('click', function(){
  let tag = "#"
    for(let i=0; i<6; i++){
        tag += colors[randomNumber()] ;
    }

    changingColor.textContent =tag ;
    mainContainer.style.backgroundColor = tag;
        
});


  function randomNumber () {
    return Math.floor(Math.random() * colors.length);
  } 