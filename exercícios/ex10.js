// 10. Escreva um programa que leia o salário de um funcionário e calcule o valor do imposto de renda a ser pago, considerando:
// Faixa salarial até R$ 2.000,00: isento
// R$ 2.000,01 até R$ 3.500,00: 10%
// Acima de R$ 3.500,00: 20%.

let salario = Number(prompt('Informe seu salário: '))
let imposto = 0

if (salario <= 2000){    
    console.log(`Imposto a pagar: Isento`)
} else if (salario <= 3500){
    imposto = (salario - 2000) * 0.1
    console.log(`Imposto a pagar: ${imposto.toFixed(2)}`)
} else {
    imposto = 150 + (salario - 3500) * 0.2
    console.log(`Imposto a pagar: ${imposto.toFixed(2)}`)
}
