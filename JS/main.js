// 1. LEER UN ELEMENTO DE HTML - IDENTIFICAR CUANDO SE HACE CLICK SOBRE EL MISMO  - RECONOCER SU CONTENIDO

//1A. Obtengo los valores signados en el html a partir de document.getElementById('nombre de id asignado a '). Creo una variable o constante y le asigno la lectura del html.
//1B. uso .forEach para recorres los valores asignados en la variable (con el mismo id) como su fuera un array.
//1C. Obtengo la lectura de  un evento con elemento.addEventListener y designo que el leea el evento cundo el mismo sea un cklick sobre el boton. 
// hasta aca puedo leer cada vez que el usuario realiza un click, identificar de que boton se trata y que valor numerico o de operacion tiene como contenido dentro del html.

//2.ESCRIBIR LOS DATOS EN EL DISPLAY


// Creo variables donde guardo los datos obtenidos desde el html de los botones
const botonNumero = document.querySelectorAll ('.numero');
const botonOperacion = document.querySelectorAll ('.operacion');

var botonResultado = document.getElementById('resultado');
const botonBorrar = document.getElementById('borrar');
const botonBorrarUno= document.getElementById('borrarUno');
//Creo valiables donde guardo los datos obtenidos desde el html del display
var resultadoAnterior=document.getElementById("resultadoAnterior"); 
var resultadoActual=document.getElementById("resultadoActual");
//Valiables para almacenar los datos
var operacionActual = "";
var operacionAnterior = "";
var operacion;
let valor01;
let valor02;
let resultado; 




botonNumero.forEach(function (boton) {

    boton.addEventListener('click', function () {
        console.log(boton.innerHTML);
        numeroIngresado (boton.innerHTML);
    })

});


botonOperacion.forEach(function (boton) {

     boton.addEventListener('click', function () {
         console.log(boton.innerHTML);
         

         if (boton.innerHTML == "+" ){
            console.log("Sumar");
            valor01=operacionActual;
            operacion== '+';
            console.log (valor01);

         } else  if (boton.innerHTML == "-" ){
            console.log("restar");
            valor01=operacionActual;
            operacion== '-';
            console.log (valor01);
            

         } else  if (boton.innerHTML == "%" ){
            console.log("dividir");
            valor01=operacionActual;
            operacion== '/';
            console.log (valor01);

         }else  if (boton.innerHTML == "x" ){
            console.log("Multiplicar");
            valor01=operacionActual;
            operacion== '*';
            console.log (valor01);

         }

         else  if (boton.innerHTML == "=" ){
            console.log("resultado");
            valor02=operacionActual;

         }
    
         //agregarOperacion(boton.innerHTML); // Cada vez que hago click llamo a una funcion.
     })
 
 });

 botonResultado.onclick = function() {
    console.log("Mostrar resultado");
};

 botonBorrar.onclick = function() {
   borrar();
    console.log("Borrar");
};

botonBorrarUno.onclick = function() {
    console.log("BorrarUno");
};
 

 //2.GUARDAR VALORES INGRESADOS 
 // Creo una funcion que guarda el valor de los botones tipo numero ingresados, los convierte en texto y los anida como texto, ya que si sumara como numero nos daria como resultado una calculo matematico. 

 function numeroIngresado (numero){
    operacionActual = operacionActual.toString() + numero.toString();
    console.log(operacionActual);
   

    display();

 }

 function display(){
    resultadoActual.innerHTML = operacionActual;

    
 }

 function borrar (){
   operacionActual = " ";
   resultadoActual.innerHTML = operacionActual;
   
 }

 









