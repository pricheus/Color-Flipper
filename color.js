//simple random functionnality
const colorList = ["red","blue", 'green', 'cyan', 'pink', 'purple', 'grey']
const btn =  document.querySelector('button');
const body = document.body;
const colorName =  document.querySelector('.colorName');
btn.onclick = function (){
    const randomColor = Math.floor(Math.random() * colorList.length) ;
    body.style.backgroundColor = colorList[randomColor];
    colorName.innerHTML = colorList[randomColor];
    
}

