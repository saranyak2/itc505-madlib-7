const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname)); 

app.get('/itc505/lab7', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/itc505/lab7', (req, res) => {
  const { tour, city, address, guide, name } = req.body;

  const madLib = `${city} is a beautiful place ${address} is my favorite ${guide} guided us ${tour} with ${name}.`;

  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});