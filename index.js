
/*
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

console.log("# Desafio Classificador de Nível de Herói");
console.log("Qual o nome de seu herói? ");
const nomeDoHeroi = "Conan";
console.log("Quantos pontos de experiência (XP) seu herói tem? ");
const xpDoHeroi = 9000;

let nivelDoHeroi;

switch (true) {
  case xpDoHeroi <= 1000:
    nivelDoHeroi = "Ferro";
    break;

  case xpDoHeroi > 1000 && xpDoHeroi <= 2000:
    nivelDoHeroi = "Bronze";
    break;

  case xpDoHeroi > 2000 && xpDoHeroi <= 5000:
    nivelDoHeroi = "Prata";
    break;

  case xpDoHeroi > 5000 && xpDoHeroi <= 7000:
    nivelDoHeroi = "Ouro";
    break;

  case xpDoHeroi > 7000 && xpDoHeroi <= 8000:
    nivelDoHeroi = "Platina";
    break;

  case xpDoHeroi > 8000 && xpDoHeroi <= 9000:
    nivelDoHeroi = "Ascendente";
    break;

  case xpDoHeroi > 9000 && xpDoHeroi <= 10000:
    nivelDoHeroi = "Imortal";
    break;

  case xpDoHeroi >= 10001:
    nivelDoHeroi = "Radiante";
    break;

  default:
    nivelDoHeroi = "Desconhecido";
    break;
}

console.log(
  "O Herói de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!"
);
