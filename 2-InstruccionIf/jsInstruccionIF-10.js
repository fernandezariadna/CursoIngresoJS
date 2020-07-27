function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
    nota = Math.floor(Math.random () * 11);
    if (nota >= 9) {

        alert("EXCELENTE " + nota);

     }
    else if (nota >= 4) {
        alert("APROBO " + nota);

    }

    else
        alert("RE PETE " + nota);

    

}//FIN DE LA FUNCIÓN