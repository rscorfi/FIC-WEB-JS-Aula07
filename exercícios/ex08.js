// 8. Escreva um programa que simule uma calculadora simples. O programa deve receber dois números e uma operação ( + , - , * , / ). O resultado da operação deve ser exibido.

let num1 = Number(prompt('Informe o 1º número: '))
let operador = (prompt('Informe a operação (+ , - , * , /): '))
let num2 = Number(prompt('Informe o 2º número: '))
let resultado = 0

if (operador === '+'){    
    console.log(`Resultado: ${resultado = num1 + num2}`)    
} else if (operador === '-'){
    console.log(`Resultado: ${resultado = num1 - num2}`)
} else if (operador === '*'){
    console.log(`Resultado: ${resultado = num1 * num2}`)
} else if (operador === '/'){
    console.log(`Resultado: ${resultado = num1 / num2}`)
} else {
    console.log("Informações inválidas")
}