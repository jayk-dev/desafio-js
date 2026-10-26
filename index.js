
// nome para meu herói
let nomeDoHeroi = "Junior"

// quantidade de XP
let pontosDeXp = 1005

// nivel do heroi
let nivelDoHeroi = ""

//estrutura de decisão

if (pontosDeXp <= 1000) {
    nivelDoHeroi = "Ferro"
}

else if (pontosDeXp >= 1001 && pontosDeXp <= 2000){
    nivelDoHeroi = "Bronze"
}

else if (pontosDeXp >= 2001 && pontosDeXp <= 5000){
    nivelDoHeroi = "Prata"
}

else if (pontosDeXp >= 5001 && pontosDeXp <= 7000){
    nivelDoHeroi = "Ouro"
}

else if (pontosDeXp >= 7001 && pontosDeXp <= 8000){
    nivelDoHeroi = "Platina"
}

else if (pontosDeXp >= 8001 && pontosDeXp <= 9000){
    nivelDoHeroi = "Ascendente"
}

else if (pontosDeXp >= 9001 && pontosDeXp <= 10000){
    nivelDoHeroi = "Imortal"
}

else if (pontosDeXp >= 10001){
    nivelDoHeroi = "Radiante"
}

// saída
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)