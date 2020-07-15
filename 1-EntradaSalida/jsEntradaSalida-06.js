/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	alert(parseInt(document.getElementById("txtIdNumeroUno").value) + parseInt(document.getElementById("txtIdNumeroDos").value));

	//esa es la forma mas corta, sino podria hacer:
	//let resultado;
	//resultado =  parseInt(document.getElementById("txtIdNumeroUno").value) + parseInt(document.getElementById("txtIdNumeroDos").value);
	//alert ("el resultado es " + resultado);
}