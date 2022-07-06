// 1. Identificar el valor que esto clickeando

const valorBoton = document.querySelectorAll ('.numero');
const operacionSeleccionada = document.querySelectorAll ('.operacion');

/*valorBoton.addEventListener('click', () => {
    console.log (valorBoton);

})
*/

valorBoton.forEach(boton => {

   // console.log(valorBoton); .forEach es una como un for, que recorre ValorBotomo como si se tratara de un array.

    boton.addEventListener('click', () =>{
        console.log(boton.innerHTML);

    })

    // .addEventListener espera la lectura de un evento, en este caso un click y cuando el evento se genera, muesta el valor HTML del mismo con .innerHTML
    
});

operacionSeleccionada.forEach(operacion => {

    operacion.addEventListener('click', () => {
        console.log(operacion.innerHTML);
    });
});

