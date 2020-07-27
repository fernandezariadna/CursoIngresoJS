/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
	let celsius;
	fahrenheit = (document.getElementById("txtIdTemperatura").value);
	celsius = [(fahrenheit - 32)] * 5 / 9;
	alert(celsius);
}

function CentigradosFahrenheit () 
{
	let fahrenheit;
	let celsius;
	celsius = (document.getElementById("txtIdTemperatura").value);
	fahrenheit = (celsius * 9 / 5) + 32;
	alert(fahrenheit);
}
