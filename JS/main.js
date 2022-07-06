// 1. Identificar el valor que esto clickeando

// Creo variables donde guardo los datos obtenidos desde el html de los botones
const botonNumero = document.querySelectorAll ('.numero');
const botonOperacion = document.querySelectorAll ('.operacion');
var botonResultado = document.getElementById('resultado');

const botonBorrar = document.getElementById('borrar');
const botonBorrarUno= document.querySelectorAll('borrarUno');
//Creo valiables donde guardo los datos obtenidos desde el html del display
var resultadoAnterior=document.getElementById("resultadoAnterior"); 
var resultadoActual=document.getElementById("resultadoActual");

var operacionActual = "";
var operacionAnterior = "";
var operacion = undefined;




botonNumero.forEach(function (boton) {

   // console.log(valorBoton); .forEach es una como un for, que recorre botonNumero como si se tratara de un array.

    boton.addEventListener('click', function () {
        console.log(boton.innerHTML);
        //agregarNumero(boton.innerHTML); // Cada vez que hago click llamo a una funcion.
    })

    // .addEventListener espera la lectura de un evento, en este caso un click y cuando el evento se genera, muesta el valor HTML del mismo con .innerHTML
    
});


botonOperacion.forEach(function (boton) {

     boton.addEventListener('click', function () {
         console.log(boton.innerHTML);

         if (boton.innerHTML == "=" ){
            console.log("finalizar calculo");

         } else if (boton.innerHTML == "+" ){
            console.log("Sumar");

         } else  if (boton.innerHTML == "-" ){
            console.log("restar");

         } else  if (boton.innerHTML == "%" ){
            console.log("dividir");

         }
         //agregarOperacion(boton.innerHTML); // Cada vez que hago click llamo a una funcion.
     })
 
 });


 botonResultado.onclick = function() {
    console.log("mostrar resultado");
};
 

 









