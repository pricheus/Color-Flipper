const colorStore = ['cyan','azure','red','yellow','beige','purple','grey','rosybrown'];
const btn = document.querySelector('button');
const colorName = document.querySelector('.colorName');
const body = document.querySelector('body');

btn.onclick = function(){
    const randomNumber = Math.floor(Math.random() * colorStore.length)
    colorName.innerHTML = colorStore[randomNumber];
    body.style.background = colorStore[randomNumber]
}