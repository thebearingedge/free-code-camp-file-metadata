
import { Router } from 'express'
import multer from 'multer'


const router = new Router()
const upload = multer()


router.use(upload.single('uploaded'), ({ file, headers }, res) => {

  const { size } = file

  res.json(size)
})

export default router
