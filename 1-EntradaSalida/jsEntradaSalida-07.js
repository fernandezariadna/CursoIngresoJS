/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	alert("la suma da " + [parseInt(document.getElementById("txtIdNumeroUno").value) + parseInt(document.getElementById("txtIdNumeroDos").value)]);
}

function restar()
{
	alert("la resta da " + [parseInt(document.getElementById("txtIdNumeroUno").value) - parseInt(document.getElementById("txtIdNumeroDos").value)]);
}

function multiplicar()
{ 
	alert("la multiplicacion da " + [parseInt(document.getElementById("txtIdNumeroUno").value) * parseInt(document.getElementById("txtIdNumeroDos").value)]);
}

function dividir()
{
	alert("la division da " + [parseInt(document.getElementById("txtIdNumeroUno").value) / parseInt(document.getElementById("txtIdNumeroDos").value)]);
}

