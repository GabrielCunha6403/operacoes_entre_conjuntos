var vetorNumeros = [];
var sorteio = [13, 35, 45, 8, 29, 19];
var qtdTentativas = 6;
var contador = 0;
var storage = [];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

function equalsCheck(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] != array2[i]) return false;
  }
  return true;
}

for (let i = 0; i < 60; i++) {
  vetorNumeros[i] = i + 1;
}

/*for (let i = 0; i < 6; i++) {
    sorteio[i] = parseInt(prompt('Digite o ' + (i + 1) + 'º número:'));
}*/

var inicio = 0;
var final = inicio + 6;
var tentativa = shuffle(vetorNumeros).slice(inicio, final);

function callFunction() {
  do {
    if (final <= 60) {
      tentativa = vetorNumeros.slice(inicio, final);
      inicio += 6;
      final += 6;
      contador++;
    } else {
      inicio = 0;
      final = 6;
      tentativa = shuffle(vetorNumeros).slice(inicio, final);
      contador++;
    }
    write(contador + " - " + storage);
    //console.log(contador + " - " + storage);
  } while (
    !equalsCheck(appendDigit(tentativa, sorteio).sort(), sorteio.sort())
  );

  console.log("Tentativas: " + contador);
}

function appendDigit(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        storage.push(array1[i]);
      }
    }
  }
  return storage;
}

function write(label) {
  let paragraphJS = document.createElement("p");
  let content = document.createTextNode(label);

  paragraphJS.appendChild(content);
  document.getElementById("megaSena").appendChild(paragraphJS);
}
