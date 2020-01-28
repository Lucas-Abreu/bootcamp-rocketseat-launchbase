// Documento criado apenas para o acompanhamento em tempo real
// das aulas, junto com as minhas próprias anotações.

// Primeira Aula - Funções

const alunosTurmaA =
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


const alunosTurmaB =
[
    {
        nome: 'Cleiton',
        nota: 10
    },
    {
        nome: 'Robson',
        nota: 10
    },
    {
        nome: 'Siclano',
        nota: 2
    },
    {
        nome: 'Novo Aluno',
        nota: 5
    },
]

// const media1 = calculaMedia(alunosTurmaA);
// const media2 = calculaMedia(alunosTurmaB);

function calculaMedia(alunos)
{
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3;
}

function enviaMensagem(media, turma)
{
    if (media > 5)
    {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`);
    }
    else
    {
        console.log(`A média da ${turma} é menor que 5.`);
    }
}

// enviaMensagem(media1, 'Turma A');
// enviaMensagem(media2, 'Turma B');

// Segunda Aula - Estruturas de Repetição
calcularMediaRepeticao(alunosTurmaA);

function calcularMediaRepeticao(alunos)
{   
    let soma = 0;
    for (let i = 0; i < alunos.length; i++)
    {
        soma += alunos[i].nota;
    };
    return soma/alunos.length;
};

const media1 = calcularMediaRepeticao(alunosTurmaA);
const media2 = calcularMediaRepeticao(alunosTurmaB);

enviaMensagem(media1, 'Turma A');
enviaMensagem(media2, 'Turma B');