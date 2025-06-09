// 5. Crie um programa que leia um ano e informe se ele é bissexto. (Um ano é bissexto se for divisível por 4, mas não por 100, exceto se também for divisível por 400.)

let ano = Number(prompt('Informe o ano: '))

if (ano % 4 === 0 && ano % 100 !== 0){
    console.log(`O ano ${ano} é bissexto`)
    } else if (ano % 400 === 0){
        console.log(`O ano ${ano} é bissexto`)
    } else {
    console.log(`O ano ${ano} não é bissexto`)
}