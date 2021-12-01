import path from 'path'

import express from 'express'

const app = express()
const port = 3001

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static('frontend_dist'))

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve('../frontend_dist/'))
  })
}

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
