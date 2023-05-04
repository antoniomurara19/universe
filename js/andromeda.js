const add = document.getElementById('add')
const remove = document.getElementById('remove')
let contador = document.getElementById('contador')
let i=0

add.addEventListener('click',()=>{
    i++
    contador.innerHTML = '&nbsp;' + i
})
remove.addEventListener('click',()=>{
    i--
    contador.innerHTML = '&nbsp;' + i
})

