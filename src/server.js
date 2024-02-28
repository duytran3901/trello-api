import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req, res) {
    res.send('<h5>Hello Duytr</h5>')
})

app.listen(port, hostname, () => {
    console.log(`Hello Duytr, i'm running server at http://${hostname}:${port}/`)
})