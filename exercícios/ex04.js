// 4. Crie um programa que leia a temperatura em graus Celsius e informe se está "Frio" (abaixo de 18°C), "Agradável" (entre 18°C e 26°C) ou "Quente" (acima de 26°C).

let temperatura = Number(prompt("Informe a temperatura atual: "))

if (temperatura > 26){
    if (temperatura > 26)
    console.log('Quente')
    } else if (temperatura >= 18){
    console.log('Agradável')
} else {
    console.log('Frio')
}