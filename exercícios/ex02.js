// 2. Crie um programa que verifique se um número é par ou ímpar.

let num = Number(prompt("Informe um número: "))

if (num % 2 === 0){
    console.log(`O número ${num} é par`)
} else {
    console.log(`O número ${num} é impar`)
}