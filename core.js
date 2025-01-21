console.log("Hello word")

let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")

console.log( burger)

burger.addEventListener("click" , el =>{
    if(burger.classList.contains("active")){
        //неактивное меня
        burger.classList.remove("active")
        menu.classList.remove("active")
    }else{
        burger.classList.add("active")
        menu.classList.add("active")
    }
})
let map = document.querySelector(".map_img")
map.addEventListener("click" , el =>{
    if(map.classList.contains("active")){
        map.classList.remove("active")
    }else{
        map.classList.add("active")
    }
})