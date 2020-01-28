// Desafio 02 - Cálculo de aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa.

// Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 15

const calc = idade + contribuicao

if (sexo === 'F' && (contribuicao >= 30 || calc >= 85)
    || sexo === 'M' && (contribuicao >= 35 || calc >= 95))
{
    console.log(`${nome}, você pode se aposentar!`)
} else
{
    console.log(`${nome}, você ainda não pode se aposentar!`)
}