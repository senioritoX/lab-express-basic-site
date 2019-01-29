const express = require('express')

const app = express()

app.use(express.static('public'))


app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home.html');
});

app.listen(3000)