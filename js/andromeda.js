const add = document.getElementById('add')
const remove = document.getElementById('remove')
const add_carrinho = document.getElementById('add-carrinho')
const carrinho = document.querySelector('.carrinho')
const carrinho_andromeda = document.querySelector('.container-carrinho-andromeda') 
let contador = document.getElementById('contador')
let i=0

add.addEventListener('click',()=>{
    i++
    contador.innerHTML = '&nbsp;' + i
    if(i>0){
        add_carrinho.addEventListener('click',()=>{
            carrinho.style.display = 'block'
        })
    }
})
remove.addEventListener('click',()=>{
    if(i>0){
        i--
        contador.innerHTML = '&nbsp;' + i
    }
})



