const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master', 
        forcePoints: 100000,
        age: 900,
        avatarImg: 'https://observer.com/wp-content/uploads/sites/2/2020/05/yoda-art-observer.jpg?quality=80',
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
    res.sendFile( path.join(__dirname + '/public/index.html'))
})

app.get('/add', (req, res) => {
    res.sendFile( path.join(__dirname + '/public/add.html'))
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

app.post('/api/characters/add', (req, res) => {
    // console.log(req.body)
    
    const newCharacter = req.body
    newCharacter.routeName = newCharacter.name.replace(/ /g, '').toLowerCase()
    characters.push(newCharacter)
    res.status(200).send()
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})