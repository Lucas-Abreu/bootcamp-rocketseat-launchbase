// Desafio 01 - Vetores e objetos
// Crie um programa com um objeto para armazenar
// dados de um programador como nome, idade e tecnologias que trabalha.

const empresa =
{
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco:
    {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);