// Documento criado apenas para o acompanhamento em tempo real
// das aulas, junto com as minhas próprias anotações.

// Primeira Aula
const nomePrimeiro = 'Mayk';
// console.log(nomePrimeiro);

/* Segunda Aula
    Criar um programa que calcula a média
    das notas entre os alunos e envia
    mensagem do cálculo da média.
*/

// Crases indicam uma template String,
// pode chamar outras variáveis de dentro dela.

const nome = `Valeska`;

const templateNome = `O nome é ${nome}`;
// console.log(templateNome);

const aluno01 = 'Mayk';
const notaAluno01 = 9.8;

const aluno02 = 'Diego';
const notaAluno02 = 10;

const aluno03 = 'Fulano';
const notaAluno03 = 2;


const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;

console.log(media); 

/* Terceira Aula
    Se a média for maior que 5, parabenizar a turma
*/
if (media > 5)
{
    console.log(`A média foi de ${media}. Parabéns!`);
}
else
{
    console.log('A média é menor que 5.');
}

/* Quarta Aula
    Operadores relacionais e comparativos
    === Igual e mesmo tipo
    == Igual (valor)
    != Diferente (valor)
    !== Diferente, inclusive o tipo
*/

/* Quinta Aula
    && E
    || OU
    ! NÃO
*/

