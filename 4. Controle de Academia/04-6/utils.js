module.exports = {
    age: function(timestamp)
    {
        const today = new Date()
        const birth = new Date(timestamp)

        let age = today.getFullYear() - birth.getFullYear() 
        const month = today.getMonth() - birth.getMonth()

        if (month < 0 ||
            month == 0 && today.getDate() <= birth.getDate)
        {
            age --
        }

        return age
    },
    graduation: function(grad)
    {
        switch(grad)
        {
            case 'medio':
                return 'Ensino Médio Completo'

            case 'superior':
                return 'Ensino Superior Completo'

            case 'mestrado':
                return 'Mestrado'

            case 'doutorado':
                return 'Doutorado'
        }
    },
    date: function(timestamp)
    {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}