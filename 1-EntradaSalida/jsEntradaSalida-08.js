/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
    alert("el resto es " + [parseInt(document.getElementById("txtIdNumeroDividendo").value) % parseInt(document.getElementById("txtIdNumeroDivisor").value)]);

}