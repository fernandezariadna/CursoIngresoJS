function mostrar()
{
	//tomo la edad  
    let edad;
    edad = document.getElementById("txtIdEdad").value;
    if (edad >= 18) {
        alert("sos mayor");
    }
    else {
        if (!(edad >= 18))
        alert("sos menor");
     }

}//FIN DE LA FUNCIÓN