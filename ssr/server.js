import http from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import HelloWorld from './src/HelloWorld'

const server = http.createServer((req, res) => {
  const dom = ReactDOMServer.renderToStaticMarkup(<HelloWorld name="World" />)
  const html = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset='utf-8'>
      <title>React SSR</title>
    </head>
      <body>
        <div id='app'>${ dom }</div>
      </body>
  </html>
  `

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(html)
})

const hostname = '127.0.0.1'
const port = 3000

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
