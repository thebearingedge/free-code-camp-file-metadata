
import { join } from 'path'
import express from 'express'
import { renderFile } from 'jade'

const port = process.env.PORT || 3000

const indexHtml = renderFile(join(__dirname, '/index.jade'))

express()
  .get('/', (req, res) => res.send(indexHtml))
  .listen(port, _ => console.log(`listening on ${port}`))
