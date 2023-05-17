const add = document.getElementById('add')
const remove = document.getElementById('remove')
const add_carrinho = document.getElementById('add-carrinho')
const carrinho = document.querySelector('.carrinho')
const carrinho_andromeda = document.querySelector('.container-carrinho-andromeda') 
let contador = document.getElementById('contador')
const fechar_carrinho = document.querySelector('.fechar-carrinho')
let i=0

add.addEventListener('click',()=>{
    i++
    contador.innerHTML = '&nbsp;' + i
    if(i>0){
        add_carrinho.addEventListener('click',()=>{
            carrinho.style.right = '0px'
        })
    }
})
remove.addEventListener('click',()=>{
    contador.inerrHTML = '&nbsp;' + i
    if(i>0){
        i--
        contador.innerHTML = '&nbsp;' + i
    }
})
fechar_carrinho.addEventListener('click',()=>{
    carrinho.style.right = '-500px'
})



