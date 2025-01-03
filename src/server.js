import express from 'express';

const app = express();

const hostname = 'localhost';
const port = 3000;

app.get('/', function (req, res) {
  res.send('<h1>Hello World Nodejs</h1>');
})

app.listen(port, hostname, () => {
  console.log(`Duy code nodejs! Server running at http://${hostname}:${port}/`);
});