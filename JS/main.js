// 1. Identificar el valor que esto clickeando

const valorBoton = document.querySelectorAll ('.numero');

/*valorBoton.addEventListener('click', () => {
    console.log (valorBoton);

})
*/

valorBoton.forEach(boton => {
    console.log(valorBoton);

    boton.addEventListener('click', () =>{
        console.log(boton.innerHTML);

    })
    
});

