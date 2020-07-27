function mostrar()
{
	//tomo el mes
	let mesDelAño =txtIdMes.value;
	

	switch (mesDelAño) {
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("este mes tiene 30 o mas dias");
			break;
		case "Febrero":
			alert("este mes tiene 29 dias o menos");
			break;
	}


}//FIN DE LA FUNCIÓN