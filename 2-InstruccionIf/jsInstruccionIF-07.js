function mostrar()
{
	//tomo la edad  
	let edad;
	let estado;
	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;

	if (edad < 18 && estado != "Soltero") {
		alert("sos muy chico para NO estar soltero");
    }
	


}//FIN DE LA FUNCIÓN