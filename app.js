let numeroSecreto =0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto);

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);   
   
   console.log(intentos);
    if (numeroDeUsuario ===numeroSecreto){
        asignarTextoElemento ('p',`acertaste, el número en ${intentos} en ${(intentos ===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p','El numero secreto es menor');
        }else{
            asignarTextoElemento ('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
    
}

function generaNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
       asignarTextoElemento ('p','Ya se sorteraron los números posibles');
    } else {
    //Si el numero generado esta incluido esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generaNumeroSecreto();

        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }   
    }
}

function condicionesIniciales (){
    asignarTextoElemento('H1', 'Juego del número secreto!');
    asignarTextoElemento('p', `indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar el mensaje de intervalo de numero 
    condicionesIniciales();
    //generar numero aleatoria
    //inicializar el numero de intentos
    //deshabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
