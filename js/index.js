const menu = document.querySelector('.menu')
const side_bar = document.querySelector('.side-bar')
const close = document.querySelector('.close')

menu.addEventListener('click',()=>{
    side_bar.style.left = '0'
})
close.addEventListener('click',()=>{
    side_bar.style.left = '-200vw'
})