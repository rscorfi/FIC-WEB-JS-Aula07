// 5. Crie um programa que leia um ano e informe se ele é bissexto. (Um ano é bissexto se for divisível por 4, mas não por 100, exceto se também for divisível por 400.)

let ano = Number(prompt('Informe o ano: '))

if (ano % 4 === 0 && ano % 100 !== 0){
    console.log(`O ano ${ano} é bissexto`)
    } else if (ano % 400 === 0){
        console.log(`O ano ${ano} é bissexto`)
    } else {
    console.log(`O ano ${ano} não é bissexto`)
}



// 6. Escreva um programa que receba a quantidade de faltas de um aluno e sua nota. Se a nota for maior ou igual a 60 e as faltas forem menores ou iguais a 5, imprima "Aprovado". Caso contrário, imprima "Reprovado".

// 7. Crie um programa que leia um caractere e informe se ele é uma vogal ou uma consoante.

// 8. Escreva um programa que simule uma calculadora simples. O programa deve receber dois números e uma operação ( + , - , * , / ). O resultado da operação deve ser exibido.

// 9. Crie um programa que receba três lados de um triângulo e classifique-o como:
// "Equilátero": todos os lados possuem a mesma medida
// "Isósceles": dois lados iguais
// "Escaleno": três lados diferentes

// 10. Escreva um programa que leia o salário de um funcionário e calcule o valor do imposto de renda a ser pago, considerando:
// Faixa salarial até R$ 2.000,00: isento
// R$ 2.000,01 até R$ 3.500,00: 10%
// Acima de R$ 3.500,00: 20%.