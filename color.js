//List of colors

const colors = ['red','green','pink','orange','purple', 'cyan','grey'];

//Interactive elements
const button = document.getElementsByClassName('button-clickMe')[0];
const changingColor = document.getElementById('changingColor');
const mainContainer = document.body;




// event on button
button.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    changingColor.textContent =colors[randomNumber] ;
    mainContainer.style.backgroundColor = colors[randomNumber];
        
});

