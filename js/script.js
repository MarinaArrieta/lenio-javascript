
let array_character = [
	{ name:"aaa", xmen:true, avenger:false, release:"1995-06-08"},
	{ name:"bbb", xmen:false, avenger:true, release:"1996-06-08"},
	{ name:"ccc", xmen:true, avenger:false, release:"1995-06-08"},
	{ name:"ddd", xmen:false, avenger:false, release:"1935-06-08"},
	{ name:"eee", xmen:true, avenger:false, release:"1995-06-08"},
	{ name:"fff", xmen:false, avenger:true, release:"1999-06-08"},
	{ name:"ggg", xmen:true, avenger:true, release:"1955-06-08"}
]


let character_xmen = array_character.filter(character => character.xmen)
let character_avanger = array_character.filter(character => character.avenger)

let character_xmen_avenger = character_xmen.filter(character => character_avanger.includes(character));




function compare_release(character_a, character_b) {
  if (character_a.release<character_b.release) {
    return -1;
  }
  if (character_a.release>character_b.release) {
    return 1;
  }
  return 0;
}


function order_and_show(characters){
	characters.sort(compare_release)

	div_contenedor = document.getElementById("contenedor")
	div_contenedor.innerHTML = ""
	
	characters.forEach((character)=>{
		div_elem = document.createElement("div")
		h1_elem = document.createElement("h1")
		p_elem = document.createElement("p")

		h1_elem.innerHTML = character.name
		p_elem.innerHTML = character.release
		div_elem.appendChild(h1_elem)
		div_elem.appendChild(p_elem)
		contenedor.appendChild(div_elem)
	})

}



document.addEventListener("DOMContentLoaded", function(event) {
    let boton = document.getElementById("button-prueba")
    boton.addEventListener("click", ()=>{
    	order_and_show(array_character)
    })

  });