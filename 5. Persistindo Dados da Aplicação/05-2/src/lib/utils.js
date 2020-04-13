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

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },
    grade: function(year){
        switch(year)
        {
            case '5A':
                return 'Fundamental - 5o Ano'
            case '6A':
                return 'Fundamental - 6o Ano'
            case '7A':
                return 'Fundamental - 7o Ano'
            case '8A':
                return 'Fundamental - 8o Ano'
            case '9A':
                return 'Fundamental - 9o Ano'
            case '1B':
                return 'Médio - 1o Ano'
            case '2B':
                return 'Médio - 2o Ano'
            case '3B':
                return 'Médio - 3o Ano'
        }
    },
    education: function(level) {
        switch(level)
        {
            case "medio":
                return 'Ensino Médio Completo';
            case "superior":
                return 'Ensino Superior Completo';
            case "mestrado":
                return 'Mestrado';
            case "Doutorado":
                return 'Doutorado';
        }
    }
}