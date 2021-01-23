const express = require('express')
const app = express()
const PORT = 3000

const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master', 
        forcePoints: 100000,
        age: 900,
        avatarImg: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/scale-to-width-down/500?cb=20150206140125',
        routeName: 'yoda'
    },
    {
        name: 'Luke Skywalker', 
        role: 'Jedi Master', 
        forcePoints: 10000,
        age: 40,
        avatarImg: 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
        routeName: 'lukeskywalker'
    },
    {
        name: 'Princess Leia', 
        role: 'General Princess', 
        forcePoints: 100,
        age: 40,
        avatarImg: 'https://cdn.theatlantic.com/thumbor/Db7r0Y1f6nGfb00pBWfXia8LmAg=/199x0:1401x1202/500x500/media/img/mt/2014/04/leia/original.jpg',
        routeName: 'princessleia'
    }
]

app.get('/', (req, res) => {
    res.send('May the force be with you!')
})

app.get('/api/characters', (req,res) => {
    res.json(characters)
})

app.get('/api/characters/:routeName', (req, res) => {
    const targetCharacter = req.params.routeName
    const character = characters.find(character => {
        return character.routeName === targetCharacter
    })
    res.json(character)
})



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})