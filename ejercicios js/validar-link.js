
console.log("mensaje desde validar-link.js")

let links = document.querySelectorAll("nav a")


// links.forEach(manipularLink) 

/*
function manipularLink(link){
	console.log(link)

	link.onclick = validar

}
*/

/*
function validar(evento){

	evento.preventDefault() //frena el comportamiento predeterminado del link/hipervinculo

	let url = evento.target.href //accedo al atributo href del target del evento, manipulacion de estructura

	let rta = confirm(`esta seguro que desea ir a ${evento.target.innerText}`)


	if(rta){
		alert("chau")
		window.location.href = url
	}else{

	}

}
*/



//funcion anonima 
links.forEach( function (link){

	console.log(link)

	link.onclick = function (evento){

		evento.preventDefault() //frena el comportamiento predeterminado del link/hipervinculo

		let url = evento.target.href //accedo al atributo href del target del evento, manipulacion de estructura

		let rta = confirm(`esta seguro que desea ir a ${evento.target.innerText}`)


		if(rta){
			alert("chau")
			window.location.href = url
		}else{

		}

	}

})

//link es una variable que guarda los elementos de la coleccion





