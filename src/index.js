
import { join } from 'path'
import express from 'express'
import { renderFile } from 'jade'
import upload from './upload'


const port = process.env.PORT || 3000


express()
  .use('/upload', upload)
  .get('/', (_, res) => res.send(renderFile(join(__dirname, '/index.jade'))))
  .listen(port, _ => console.log(`listening on ${port}`))
