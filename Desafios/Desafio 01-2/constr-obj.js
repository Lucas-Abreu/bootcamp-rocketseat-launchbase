// Desafio 02 - Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat
// dentro de um objeto chamado empresa.

const programador = 
{
    nome: 'Carlos',
    idade: 32,
    tecnologias:
    [
        {
            nome: 'C++',
            especialidade: 'Desktop'
        }, 
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e ` + 
`usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);