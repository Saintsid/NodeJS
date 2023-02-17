const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('This home page')
})

app.get('/about', (req, res) => {
    res.send('Про нас')
})

app.get('/user/:username/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})