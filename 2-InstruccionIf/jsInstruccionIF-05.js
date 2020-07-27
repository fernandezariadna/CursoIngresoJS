function mostrar()
{
	//tomo la edad  
    let edad;
    edad = document.getElementById("txtIdEdad").value;
    if (edad < 13 || edad > 18) {

        alert("no sos puber");
    }

}//FIN DE LA FUNCIÓN