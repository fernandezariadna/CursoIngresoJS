function mostrar()
{
	//tomo la edad  
	let edad;
	let estado;
	edad = parseFloat(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if (edad > 18 && estado == "Soltero") {

		alert("Te vas a quedar solo");
    }
	


}//FIN DE LA FUNCIÓN