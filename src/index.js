
import express from 'express'


const port = process.env.PORT || 3000


express()
  .get('/', (req, res) => res.send('hello app'))
  .listen(port, _ => console.log(`listening on ${port}`))
