// Desafio 02 - Busca por tecnologia
// Crie uma função que recebe os dados de um objeto de usuário e retorna
// SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

const usuarios =
[
    {
        nome: 'Carlos',
        tecnologias:
            [
                'HTML',
                'CSS'
            ]
    },
    {
        nome: 'Jasmine',
        tecnologias:
            [
                'JavaScript',
                'CSS'
            ]
        },
    {
        nome:
        'Tuane',
        tecnologias:
            [
                'HTML',
                'Node.js'
            ]
    }
]

for (let i = 0; i < usuarios.length; i++)
{
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
  
    if(usuarioTrabalhaComCSS)
    {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}

function checaSeUsuarioUsaCSS(usuario)
{
    return (usuario.tecnologias.indexOf('CSS') > -1 ? true : false)
}
