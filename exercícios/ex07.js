// 7. Crie um programa que leia um caractere e informe se ele é uma vogal ou uma consoante.

let letra = (prompt('Informe a letra: '))

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    console.log('Vogal')    
} else {
    console.log("Consoante")
}