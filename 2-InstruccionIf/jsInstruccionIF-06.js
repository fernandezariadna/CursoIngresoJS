function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 13 && edad <= 18) {
		alert("puberrr");
	}
	else if (edad <= 12) {
		alert("sos re wachin");
	}
	else {
		alert("tas viejazo");
    }




}//FIN DE LA FUNCIÓN