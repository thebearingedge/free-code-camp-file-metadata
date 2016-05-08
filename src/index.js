
import { join } from 'path'
import express from 'express'
import { renderFile } from 'jade'
import upload from './upload'


const port = process.env.PORT || 3000
const indexHtml = renderFile(join(__dirname, '/index.jade'))


express()
  .use('/upload', upload)
  .get('/', (req, res) => res.send(indexHtml))
  .listen(port, _ => console.log(`listening on ${port}`))
