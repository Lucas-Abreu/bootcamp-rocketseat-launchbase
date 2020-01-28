// Documento criado apenas para o acompanhamento em tempo real
// das aulas, junto com as minhas próprias anotações.

// Primeira Aula - Objetos

const aluno01 =
{
    nome: 'Mayk',
    nota: 9.8
};

const aluno02 =
{
    nome: 'Diego',
    nota: 10
};

const aluno03 =
{
    nome: 'Fulano',
    nota: 2
};

const media = (aluno01.nota + aluno02.nota + aluno03.nota)/3;

// console.log(media);

// Segunda Aula - Vetores / Arrays

const alunos =
[
    {
        nome: 'Mayk',
        nota: 9.8
    },
    {
        nome: 'Diego',
        nota: 10
    },
    {
        nome: 'Fulano',
        nota: 2
    }
]

const mediaArray = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3;
console.log(alunos);