function mostrar()
{
	let estacionDelAño;
	let lugar;
	const precioInicial = 15000;
	let precioFinal;
	estacionDelAño = document.getElementById("txtIdEstacion").value;
	lugar = document.getElementById("txtIdDestino").value;

	switch (estacionDelAño) {
		case "Invierno":
			if (lugar == "Bariloche") {
				precioFinal = precioInicial + (precioInicial * 20 / 100);
				alert(precioFinal);
			}
			else if (lugar == "Cataratas" || lugar == "Cordoba") {
				precioFinal = precioInicial - (precioInicial * 10 / 100);
				alert(precioFinal);
			}
			else {
				precioFinal = precioInicial - (precioInicial * 20 / 100);
				alert(precioFinal);
            }
			break; 
		case "Verano":
			if (lugar == "Bariloche") {
				precioFinal = precioInicial - (precioInicial * 20 / 100);
				alert(precioFinal);
			}
			else if (lugar == "Cordoba" || lugar == "Cataratas") {
					precioFinal = precioInicial + (precioInicial * 10 / 100);
					alert(precioFinal);
				}
				else {
					precioFinal = precioInicial + (precioInicial * 20 / 100);
					alert(precioFinal);
				}
			break;
		case "Otoño":
		case "Primavera":
			if (lugar == "Bariloche") {
				precioFinal = precioInicial + (precioInicial * 10 / 100);
				alert(precioFinal);
			}
			else if (lugar == "Cataratas" || lugar == "Mar del plata") {
				precioFinal = precioInicial + (precioInicial * 10 / 100);
				alert(precioFinal);
			}
			else {
				alert(precioInicial);
			}
			break;
			}
    }

//FIN DE LA FUNCIÓN