/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let perimetro;
	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);
	perimetro = (ancho + largo)*2;
	alert(perimetro*3);

}
function Circulo () 
{
	let radio;
	let diametro;
	radio = parseFloat(document.getElementById("txtIdRadio").value);
	diametro = radio * 2;
	alert(diametro * 3);
}
function Materiales () 
{
	const cal = 3
	const cemento = 2
	let largo;
	let ancho;
	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);
	perimetro = (ancho + largo) * 2;
	alert("de cemento se necesitara " + perimetro * cemento + " y de cal se necesitara " + perimetro * cal);

}