const express = require('express')

express()
  .get('/author', (request, response) => response.send('AUTHOR'))
  .get('/course', (request, response) => response.send('COURSE'))
  .use((request, response) => response.status(404).send('Nao ha rota'))
  .listen(3002)
