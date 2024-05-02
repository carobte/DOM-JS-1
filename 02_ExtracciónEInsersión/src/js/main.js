// const header1 = document.getElementsByTagName("header")
// console.info(header1[0])

//trae solo un elemento si le pongo el All trae todos en un NODECollection
const header = document.querySelector("header")

const titulo = document.createElement("h1") //crea etiqueta h1
console.log(titulo)

titulo.textContent = "Galeria de perritos" //agrega texto al elemento

/* titulo.setAttribute("id","titulo-principal") */ //agrega un id a la etiqueta
titulo.id="titulo-principal" //esta manera es mas moderna de crear un id en la etiqueta

//colores
/* titulo.style="color:blue" //forma de dar estilos a las cosas, no es recomendado
titulo.style.color = "blue"//hace lo mismo que la de arriba, no son recomendables porque crean el estilo en el html */
titulo.classList.add("text-primary","text-center", "bg-dark","pb-5") 
/* titulo.classList.add("text-center") //centra el texto
titulo.classList.add("bg-dark") */

header.classList.add("pb-5", "bg-success") //padding bottom al header

header.classList.remove("pb-5")//elimina el padding bottom



header.appendChild(titulo) //le envia la etiqueta titulo al header
