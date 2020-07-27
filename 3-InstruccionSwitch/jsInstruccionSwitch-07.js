function mostrar()
{
    let lugar;
    lugar = document.getElementById("txtIdDestino").value;

    switch (lugar) {
        case "Bariloche":
            alert("vamo al sur?");
            break;
        case "Cataratas":
            alert("vamo al norte?");
            break
        case "Mar del plata":
            alert("un poquito al norte no mas, a la costa amigo");
            break;
        case "Ushuaia":
            alert("abrigate que vamos al sur");
            break;
    }

}//FIN DE LA FUNCIÓN