// Servidor nativo em node.js, sem framework

/* import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.write('opa')

  return res.end()
})

server.listen(3333) */

import { fastify } from 'fastify'

const server = fastify()

server.get('/hello', () => {
  return 'hello world'
})

server.listen({
  port: 3333
})