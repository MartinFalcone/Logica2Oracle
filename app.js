let numeroSecreto = 0
let intentos = 1
let listaNumerosSorteados = []
let numeroMaximo = 10

function asiginarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asiginarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (numeroDeUsuario < numeroSecreto) {
        asiginarTextoElemento('p', 'El numero secreto es mayor');
    } else {
        asiginarTextoElemento('p', 'El numero secreto es menor')
    }
    intentos++
    limpiarCaja();

    return
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //funcion "recursiva" si eñ numero esta incluido en la lista, se vuelve a generar un numero secreto. En caso contrario el numero generado se "pushea" a la lista

    if (listaNumerosSorteados.length == numeroMaximo) {
        asiginarTextoElemento('p', 'Todos los numeros posibles han sido sorteados');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }

}

function condicionesIniciales() {
    asiginarTextoElemento('h1', 'Juego del numero secreto');
    asiginarTextoElemento('p', `Indica el numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
    document.querySelector('#reiniciar').setAttribute('disbled', 'true');

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales()
