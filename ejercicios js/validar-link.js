
console.log("mensaje desde validar-link.js")

let links = document.querySelectorAll("nav a")


links.forEach(manipularLink) 


function manipularLink(link){
	console.log(link)

	link.onclick = validar

}


function validar(evento){

	evento.preventDefault() //frena el comportamiento predeterminado del link/hipervinculo

	let rta = confirm("esta seguro que desea salir de la pagina")

	if(rta){
		alert("chau")
	}else{

	}

}