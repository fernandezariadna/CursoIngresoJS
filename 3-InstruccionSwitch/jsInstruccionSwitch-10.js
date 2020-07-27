function mostrar()
{
    let lugar;
    let estacion;
    lugar = document.getElementById("txtIdDestino").value;
    estacion = document.getElementById("txtIdEstacion").value;
   
    switch (estacion) {
        case "Invierno":
            if (lugar == "Bariloche") {
                alert("Se viaja");
            }
            else {
                alert("No se viaja");
            }
            break;
    
        case "Verano":
            if (lugar == "Mar del plata" || lugar == "Cataratas") {
                alert("Se viaja");
            }
            else {
                alert("No se viaja");
            }
            break;
        case "Otoño":
            alert("Pero viajemos adonde quieran genteeee");
            break
        case "Primavera":
            if (lugar == "Bariloche") {
                alert("no se viaja");
            }
            else {
                alert("se viajaAAA");
            }
            break;
        }
           
    

}//FIN DE LA FUNCIÓN