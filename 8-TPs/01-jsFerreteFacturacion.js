/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	let resultado;
	resultado = parseFloat(document.getElementById("txtIdPrecioUno").value) + parseFloat(document.getElementById("txtIdPrecioDos").value) + parseFloat(document.getElementById("txtIdPrecioTres").value);
	alert(resultado);

}
function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
	let resultado;
	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	resultado = (precio1 + precio2 + precio3) / 3;
	alert(resultado);
}
function PrecioFinal () 
{
	let precio1;
	let precio2;
	let precio3;
	let iva;
	let resultado;
	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	resultado = precio1 + precio2 + precio3;
	iva = resultado * 21 / 100;
	resultado = resultado + iva;
	alert(resultado);
}