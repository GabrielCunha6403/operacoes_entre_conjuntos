//================================ MEGA SENA ================================

var acumulador = 0;

function createVetor() {
    let vetorMegaSena = [6];
    for (let i = 0; i < 6; i++) {
        vetorMegaSena[i] = parseInt(Math.random() * 60);
    }
    return vetorMegaSena;
}

function validateMegaSena(vetor) {
    for (let i = 0; i < 6; i++) {
        if(vetor[i] != createVetor()[i])
            return false;
    }
    return true;
}

var teste = [10, 20, 30, 40, 50, 55];

while(!validateMegaSena(teste)){
    acumulador++;
}

console.log(acumulador);

//================================ /MEGA SENA ================================