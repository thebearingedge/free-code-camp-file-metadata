
import multer from 'multer'


export default [multer().single('uploaded'), ({ file, method }, res) => {

  if (method !== 'POST') return res.redirect('/')

  const { originalName: name, size } = file

  res.json({ name, size })
}]
