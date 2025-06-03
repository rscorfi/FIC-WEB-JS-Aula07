// 1. Crie um programa que verifique e informe se um número é positivo, negativo ou zero.

let num = Number(prompt("Informe um número: "))

if (num < 0){
    console.log(`O número ${num} é negativo`)
    } else if (num > 0){
        console.log(`O número ${num} é positivo`)
} else {
        console.log(`O número é 0`)
}