

//ingreso el modulo que necesito 
var http = require("http")
var fs = require("fs")

//el create server se ejecuta cada vez que haya una peticion al servidor, mediante el puerto de http (80) responde la aplicacion
http.createServer(procesar).listen(80)



//(request, response)
function procesar(peticion, respuesta){

	//imprimo en el navegador	
	respuesta.writeHead(200, {

		"Content-Type" : "text/html"
	
	})

	// busca un archivo, en parametro primero va el error y despues el archivo
	// el .substr(1) le quita la barra anterior al nombre del archivo
	fs.readFile(peticion.url.substr(1), function(error, archivo){

		if(error){

			respuesta.end("archivo no encontrado")

		}else {
			respuesta.end(archivo)
		}

	})

	




}



