function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("falta para el invierno");
			break
		case "Julio":
		case "Agosto":
			alert("abrigate loko");
			break
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("calooooorrrrr");
			break;
    }




}//FIN DE LA FUNCIÓN