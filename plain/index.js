const http = require('http')

const getAuthor = (request, response) => {
  response.writeHead(200)
  response.write('AUTHOR')
  response.end()
}

const getCourse = (request, response) => {
  response.writeHead(200)
  response.write('COURSE')
  response.end()
}

const notFound = (request, response) => {
  response.writeHead(404)
  response.write('Nao ha rota')
  response.end()
}

const server = http.createServer((request, response) => {

  if (request.method === 'GET' && request.url === '/author') {
    getAuthor(request, response)
  }

  else if (request.method === 'GET' && request.url === '/course') {
    getCourse(request, response)
  }

  else {
    notFound(request, response)
  }

})

server.listen(3002)
