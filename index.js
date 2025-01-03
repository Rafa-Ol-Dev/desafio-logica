const prompt = require('prompt-sync')();

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

const heroName = prompt("What is your hero's name? ");
const heroXp = parseInt(prompt("How many experience points does your hero have? "));
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

console.log("O Herói de nome " + heroName + " está no nível " + heroLevel);