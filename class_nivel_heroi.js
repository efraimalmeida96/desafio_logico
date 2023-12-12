/* 1º Desafio Classificador de nível de Herói 

** O que deve ser utilizado **

- Variávies
- Operadores 
- Laços de repetição
- Estruturas de decisões 

## Objetivo 

Crie uma variável para armazenar o nome e a quantidade de uma 
experiência (XP) de um herói, depois utilize uma estrutura 
de decisão para apresentar algma das mensagens abaixo:

Se XP for menor do que 1000 = Ferro
Se XP for entre 1001 e 2000 = Bronze
Se XP for entre 2001 e 5000 = Prata
Se XP for entre 5001 e 6000 = Ouro
Se XP for entre 6001 e 7000 = Platina
Se XP for entre 7001 e 8000 = Diamante
Se XP for entre 8001 e 9000 = Ascendente
Se XP for entre 9001 e 10000 = Imortal
Se XP for maior ou igual a 10001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O herói de nome {nome} está no nível de {nivel}" */

let heroiNome = "Opala"
let xp = 1
let pontosProxNivel = 0
let elo = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Ascendente", "Imortal", "Radiante"]

console.log("Niveis existentes: ");

for (let i = 0; i < elo.length; i++){
    console.log(elo[i]);
}

console.log(" ")


switch (true) {
    case xp < 1000:
        pontosProxNivel = 1001 - xp;
        console.log("O Herói de nome " + heroiNome, "está no nível Ferro.");
        console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Bronze.");
        break;
    case xp >= 1001 && xp <= 2000:
        pontosProxNivel = 2001 - xp;
        console.log("O Herói de nome " + heroiNome, "está no nível Bronze");
        console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Prata.");
        break;
    case xp >= 2001 && xp <= 5000:
        pontosProxNivel = 5001 - xp;
        console.log("O Herói de nome " + heroiNome, "está no nível Prata");
        console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Ouro.");
        break;
    case xp >= 5001 && xp <= 6000:
        pontosProxNivel = 6001 - xp;
        onsole.log("O Herói de nome " + heroiNome, "está no nível Ouro");
        console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Platina.");
        break;
    case xp >= 6001 && xp <= 7000:
        pontosProxNivel = 7001 - xp;
        console.log("O Herói de nome " + heroiNome, "está no nível Platina");
        console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Diamante.");
        break;
    case xp >= 7001 && xp <= 8000:
        pontosProxNivel = 8001 - xp;
        console.log("O Herói de nome " + heroiNome, "está no nível Diamante");
        console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Ascendente.");
        break;
    case xp >= 8001 && xp <= 9000:
        pontosProxNivel = 9001 - xp;
        console.log("O Herói de nome " + heroiNome, "está no nível Ascendente");
        console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Imortal.");
        break;
    case xp >= 9001 && xp <= 10000:
        pontosProxNivel = 10001 - xp;
        console.log("O Herói de nome " + heroiNome, "está no nível Imortal");
        console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Radiante.");
        break;
    default:
        console.log("O Herói de nome " + heroiNome, "está no nível Radiante");
}