
//================================== CLASSES ================================== 
    
class Matriz{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;

        let matriz = new Array(rows);
        
        for(var i = 0; i < rows; i++){
            matriz[i] = new Array(cols);
        }

        this.matriz = matriz;
    }

    getN(){
        return this.rows;
    }
    
    getM(){
        return this.cols;
    }

}

//================================== /CLASSES ==================================

//================================== FUNÇÃO PARA CRIAR UMA MATRIZ ==================================

function createMatriz(){
    let linhas = parseInt(prompt("Quantas linhas terá a matriz?"));
    let colunas = parseInt(prompt("Quantas colunas terá a matriz?"));

    var matriz = new Matriz(linhas, colunas);

    for(let i = 0; i < matriz.getN(); i++){
        for (let j = 0; j < matriz.getM(); j++) {
            let termo = parseInt(prompt("Qual o valor do termo " + (i + 1) + (j + 1)+ ":"));
            matriz.matriz[i][j] = termo;
        }
    }

    return matriz;
}

//================================== /FUNÇÃO PARA CRIAR UMA MATRIZ ==================================


//================================== FUNÇÃO PARA TRANSFORMAR MATRIZ EM UMA TABLE HTML ==================================
let tabela = document.getElementById("tabela");

function writeMatriz(matriz) {

    let table = document.createElement('table');

    for (let i = 0; i < matriz.getN(); i++) {

        let tr = document.createElement('tr');

        for (let j = 0; j < matriz.getM(); j++) {
            var td = document.createElement('td')
            var data = document.createTextNode(matriz.matriz[i][j]);

            td.appendChild(data);

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    document.getElementById('matrizArea').appendChild(table);
}

//================================== /FUNÇÃO PARA TRANSFORMAR MATRIZ EM UMA TABLE HTML ==================================

//================================== TRANSPOSTA ==================================

function transpose(matriz){
    let rows = matriz.getN();
    let cols = matriz.getM();
    var newMatriz = new Matriz(cols, rows)
    for(let i = 0; i < matriz.getM(); i++){
        for(let j = 0; j < matriz.getN(); j++){
            newMatriz.matriz[i][j] = matriz.matriz[j][i];
        }
    }
    return newMatriz;
}

//================================== /TRANSPOSTA ==================================

//================================== CRIAÇÃO DO CONJUNTO ==================================

var conjunto = [];
var qtd = parseInt(prompt("Quantos elementos terá o conjunto?"));
var elemento;
for (let i = 0; i < qtd; i++) {
    elemento = parseInt(prompt("Elemento " + (i + 1) + ":"));
    conjunto.push(elemento);
}

//================================== /CRIAÇÃO DO CONJUNTO ==================================

//================================== FUNÇÃO DE DELIMITAÇÃO ==================================

function delimitacao(x, y){
    return (Math.pow(x, 2) - (10 * x) + Math.pow(y, 2) + (2 * y) + 10);
}

//================================== /FUNÇÃO DE DELIMITAÇÃO ==================================

//================================== PREENCHIMENTO DA MATRIZ ==================================

var matriz = new Matriz(qtd, qtd);
for (let i = 0; i < qtd; i++) {
    for (let j = 0; j < qtd; j++) {
        if(delimitacao(conjunto[i], conjunto[j]) <= 0)
            matriz.matriz[i][j] = 1;
        else
            matriz.matriz[i][j] = 0;
    }
}

//================================== /PREENCHIMENTO DA MATRIZ ==================================

function reflexiva(matriz) {
    for (let i = 0; i < matriz.matriz.length; i++) {
        if(matriz.matriz[i][i] != 1)
            return false;    
    }
    return true;
}

function simetria(matriz) {
    var matrizT = transpose(matriz);
    for (let i = 0; i < matriz.matriz.length; i++) {
        for (let j = 0; j < matriz.matriz.length; j++) {
            if(matriz.matriz[i][j] != matrizT.matriz[i][j])
                return false;
        }
    }
    return true;
}

function antissimetria(matriz){
    for (let i = 0; i < matriz.matriz.length; i++) {
        for (let j = 0; j < matriz.matriz.length; j++) {
            if(i != j){
                if(matriz.matriz[i][j] == 1){
                    if(matriz.matriz[j][i] != 0){
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

function assimetria(matriz){
    for (let i = 0; i < matriz.matriz.length; i++) {
        if(matriz.matriz[i][i] != 0)
            return false;    
    }
    if(!antissimetria(matriz))
        return false;
    else    
        return true;
}

writeMatriz(matriz);

if(reflexiva(matriz))
    document.getElementById("subArea").innerHTML+= "<label style='color: #0f0'>REFLEXIVA</label>"
else
    document.getElementById("subArea").innerHTML+= "<label style='color: #f00'>REFLEXIVA</label>"

if(simetria(matriz))
    document.getElementById("subArea").innerHTML+= "<label style='color: #0f0'>SIMÉTRICA</label>"
else
    document.getElementById("subArea").innerHTML+= "<label style='color: #f00'>SIMÉTRICA</label>"

if(antissimetria(matriz))
    document.getElementById("subArea").innerHTML+= "<label style='color: #0f0'>ANTISSIMÉTRICA</label>"
else
    document.getElementById("subArea").innerHTML+= "<label style='color: #f00'>ANTISSIMÉTRICA</label>"

if(assimetria(matriz))
    document.getElementById("subArea").innerHTML+= "<label style='color: #0f0'>ASSIMÉTRICA</label>"
else
    document.getElementById("subArea").innerHTML+= "<label style='color: #f00'>ASSIMÉTRICA</label>"
