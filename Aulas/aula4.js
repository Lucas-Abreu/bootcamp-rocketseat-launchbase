// Documento criado apenas para o acompanhamento em tempo real
// das aulas, junto com as minhas próprias agradeções.

// Primeira Aula - Booleanos

const classA =
[
    {
        name: 'Mayk',
        grade: 9.8
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Fulano',
        grade: 2
    }
]


const classB =
[
    {
        name: 'Cleiton',
        grade: 10
    },
    {
        name: 'Robson',
        grade: 10
    },
    {
        name: 'Siclano',
        grade: 2
    },
    {
        name: 'Novo student',
        grade: 5
    }
]

function markedAsFlunked(student)
{
    student.flunked = false
    if (student.grade <= 5)
    {
        student.flunked = true 
    }
}   

function studentFlunked(students)
{
    for (let student of students)
    {
       markedAsFlunked(student)
       sendMessageFlunked(student)
    }
}

function sendMessageFlunked(student)
{
    if (student.flunked)
    {
        console.log(`Student ${student.name} flunked!`)
    }
}

studentFlunked(classA)    
studentFlunked(classB)
