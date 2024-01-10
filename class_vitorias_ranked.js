/* Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */


let vitorias = 80
let derrotas = 4
let saldoVitoriras = (vitorias - derrotas)
let proxRank = 0  
let rankes = ["Ferro 0-10", "Bronze 11-20", "Prata 21-50", "Ouro 51-80", "Diamante 81-90", "Lendario 91-100", "Imortal 101"]


console.log("Rankes existentes: ");

for (let i = 0; i < rankes.length; i++){
    console.log(rankes[i]);
}

console.log(" ")

nivelRank()

function nivelRank(){
    switch(true){
        case saldoVitoriras <= 10:
            proxRank = 11 - saldoVitoriras;
            console.log("O Herói tem saldo de " + saldoVitoriras, "vitórias e está no rank de Ferro");
            console.log("Faltam " + proxRank, "vitórias para o próximo Rank Bronze.");
            break;
        case saldoVitoriras >= 11 && saldoVitoriras <= 20:
            proxRank = 21 - saldoVitoriras;
            console.log("O Herói tem saldo de " + saldoVitoriras, "vitórias e está no rank de Bronze");
            console.log("Faltam " + proxRank, "vitórias para o próximo Rank Prata.");
            break;  
        case saldoVitoriras >= 21 && saldoVitoriras <= 50:
            proxRank = 51 - saldoVitoriras;
            console.log("O Herói tem saldo de " + saldoVitoriras, "vitórias e está no rank de Prata");
            console.log("Faltam " + proxRank, "vitórias para o próximo Rank Ouro.");
            break;
        case saldoVitoriras >= 51 && saldoVitoriras <= 80:
            proxRank = 81 - saldoVitoriras;
            console.log("O Herói tem saldo de " + saldoVitoriras, "vitórias e está no rank de Ouro");
            console.log("Faltam " + proxRank, "vitórias para o próximo Rank Diamante.");
            break;
        case saldoVitoriras >= 81 && saldoVitoriras <= 90:
            proxRank = 91 - saldoVitoriras;
            console.log("O Herói tem saldo de " + saldoVitoriras, "vitórias e está no rank de Diamante");
            console.log("Faltam " + proxRank, "vitórias para o próximo Rank Lendario.");
            break;
        case saldoVitoriras >= 91 && saldoVitoriras <= 100:
            proxRank = 101 - saldoVitoriras;
            console.log("O Herói tem saldo de " + saldoVitoriras, "vitórias e está no rank de Lendario");
            console.log("Faltam " + proxRank, "vitórias para o próximo Rank Imortal.");
            break;
        default:
        console.log("O Herói é um RARO IMORTAL !!!");
    }
}