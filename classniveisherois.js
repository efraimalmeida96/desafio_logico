if(xp <= 1000){
    pontosProxNivel = 1001 - xp;
    console.log("O Herói de nome " + heroiNome, "está no nível Ferro.");
    console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Bronze.");
}
else if(xp >= 1001 && xp <= 2000){
    pontosProxNivel = 2001 - xp;
    console.log("O Herói de nome " + heroiNome, "está no nível Bronze");
    console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Prata.");
}
else if(xp >= 2001 && xp <= 5000){
    pontosProxNivel = 5001 - xp;
    console.log("O Herói de nome " + heroiNome, "está no nível Prata");
    console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Ouro.");
}
else if(xp >= 5001 && xp <= 6000){
    pontosProxNivel = 6001 - xp;
    console.log("O Herói de nome " + heroiNome, "está no nível Ouro");
    console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Platina.");
}
else if(xp >= 6001 && xp <= 7000){
    pontosProxNivel = 7001 - xp;
    console.log("O Herói de nome " + heroiNome, "está no nível Platina");
    console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Diamante.");
}
else if(xp >= 7001 && xp <= 8000){
    pontosProxNivel = 8001 - xp;
    console.log("O Herói de nome " + heroiNome, "está no nível Diamante");
    console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Ascendente.");
}
else if(xp >= 8001 && xp <= 9000){
    pontosProxNivel = 9001 - xp;
    console.log("O Herói de nome " + heroiNome, "está no nível Ascendente");
    console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Imortal.");
}
else if(xp >= 9001 && xp <= 10000){
    pontosProxNivel = 10001 - xp;
    console.log("O Herói de nome " + heroiNome, "está no nível Imortal");
    console.log("Faltam " + pontosProxNivel, "pontos para o próximo nível Radiante.");
}
else{
    console.log("O Herói de nome " + heroiNome, "está no nível Radiante");
}