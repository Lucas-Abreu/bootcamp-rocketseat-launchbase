// Desafio 01 - Operações bancárias
// Crie um programa para realizar operações bancárias na conta de um usuário.

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction)
{
    if (transaction.type === 'credit' ? user.balance += transaction.value : user.balance -= transaction.value);
    user.transactions.push(transaction)
}

function getHigherTransactionByType(type)
{
    let higher = 0
    let id = 0

    for (let i = 0; i < user.transactions.length; i++)
    {

        if (user.transactions[i].type === type && user.transactions[i].value > higher)
        {

            higher = user.transactions[i].value
            id = i
        }
    }

    return console.log(user.transactions[id])
}

function getAverageTransactionValue()
{
    let average = 0

    for (let transaction of user.transactions)
    {
        average += transaction.value
    }
    
    return console.log(average/user.transactions.length)
}

function getTransactionsCount()
{  
    var obj =
    {
        credit: 0,
        debit: 0
    }

    for (let transaction of user.transactions)
    {
        if (transaction.type === 'credit' ? obj.credit++ : obj.debit++);
    }
    
    return console.log(obj)
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount() 