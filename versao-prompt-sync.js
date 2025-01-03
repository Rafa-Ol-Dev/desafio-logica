const prompt = require("prompt-sync")();

const heroName = prompt("Qual o nome de seu herói? ");
const heroXp = parseInt(
  prompt("Quantos pontos de experiência (XP) seu herói tem? ")
);
let heroLevel;

switch (true) {
  case heroXp <= 1000:
    heroLevel = "Ferro";
    break;

  case heroXp > 1000 && heroXp <= 2000:
    heroLevel = "Bronze";
    break;

  case heroXp > 2000 && heroXp <= 5000:
    heroLevel = "Prata";
    break;

  case heroXp > 5000 && heroXp <= 7000:
    heroLevel = "Ouro";
    break;

  case heroXp > 7000 && heroXp <= 8000:
    heroLevel = "Platina";
    break;

  case heroXp > 8000 && heroXp <= 9000:
    heroLevel = "Ascendente";
    break;

  case heroXp > 9000 && heroXp <= 10000:
    heroLevel = "Imortal";
    break;

  case heroXp >= 10001:
    heroLevel = "Radiante";
    break;

  default:
    heroLevel = "Desconhecido";
    break;
}

console.log(
  "O Herói de nome " + heroName + " está no nível " + heroLevel + "!"
);
