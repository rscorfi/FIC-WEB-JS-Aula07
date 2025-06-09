// 9. Crie um programa que receba três lados de um triângulo e classifique-o como:
// "Equilátero": todos os lados possuem a mesma medida
// "Isósceles": dois lados iguais
// "Escaleno": três lados diferentes

let ladoA = Number(prompt('Informe o tamanho do lado "A": '))
let ladoB = Number(prompt('Informe o tamanho do lado "B": '))
let ladoC = Number(prompt('Informe o tamanho do lado "C": '))

if (ladoA === ladoB && ladoB === ladoC){
    console.log('Triângulo Equilátero')
} else if ((ladoA === ladoB && ladoB !== ladoC) || (ladoB === ladoC && ladoA !== ladoC) || (ladoA === ladoC && ladoA !== ladoB)){
    console.log('Triângulo Isóceles')
} else {
    console.log('Triângulo Escaleno')
}