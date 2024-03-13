let titulo = document.querySelector('h1');
titulo.innerHTML = "juego del numero secreto";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "indica un numero del 1 al 10";

function asiginarTextoElemento(elemento, texto){let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function intentoDelUsuario(){
    alert('Click desde el boton')
}

asiginarTextoElemento('h1', 'Juego del numero secreto');
asiginarTextoElemento('p', 'Indica el numero del 1 al 10');