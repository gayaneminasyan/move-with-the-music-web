
//search bar
const icon = document.querySelector('.search-icon')
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const clear = document.querySelector('.clear')
const searchvalue = document.getElementById('searchvalue')
icon.onclick = () => {
    search.classList.toggle('active')
    input.classList.toggle('none')
    clear.classList.toggle('none')
}
clear.onclick = () =>{
     searchvalue.value = ''
}

const x = searchvalue.value
console.log(x);