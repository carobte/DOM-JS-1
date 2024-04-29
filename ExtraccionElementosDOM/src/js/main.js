let one = document.getElementById("btn-one") //Element
console.log(one)
let two = document.getElementsByClassName("btn-two") // HTMLCollection
console.log(two)
let three = document.getElementsByName("btn-three") // NodeList
console.log(three)
let four = document.getElementsByTagName("button") // HTMLCollection
console.log(four)


let uno = document.querySelector("#btn-uno") // Element
console.log(uno)
let dos = document.querySelector(".btn-dos") // Element
console.log(dos)
// querySelector with attributes can be used with All or only querySelector
let tres = document.querySelectorAll('[name= "btn-tres"]') // NodeList
console.log(tres)
let cuatro = document.querySelectorAll("button") // NodeList
console.log(cuatro[cuatro.length - 1]) // Element