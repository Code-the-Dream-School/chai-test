const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));
app.use(express.json())

//personal note- change localhost back to 3000 when finished with last project its 3001 right now

const people = []

app.post('/api/v1/people', (req, res) => {
    if(!req.body.name) {
        res.status(400).json({error: 'Please enter a name.'})
        return
    }
    if (!req.body.age) {
        res.status(400).json({error: 'Please enter an age.'})
        return
    }
    const age = Number(req.body.age)
    if (isNaN(age) || age < 0 ) {
        res.status(400).json({error: 'age cant be a negative number'})
        return
    }
    req.body.age = age
    req.body.index = people.length
    people.push(req.body)
    res.status(201).json({message: 'A person record was added.'})
})

app.get('/api/v1/people', (req, res) => {
    res.json(people)
})

app.get('/api/v1/people/:id',(req,res) => {
    index = Number(req.params.id)
    if (isNaN(index) || !Number.isInteger(index) || index < 0 || index >= people.length) {
        res.status(404).json({message: 'this persons record was not found'})
        return
    }
    res.json(people[index])
})

app.all('/api/v1/*', (req, res) => {
    res.json({ error: 'That route is not implemented.' })
})

app.listen(3001, () => {
    console.log("listening on port 3001...")
})

module.exports = app
