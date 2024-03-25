import express from 'express'
import cors from 'cors'
import rootRoutes from './routes/rootRoutes.js'
import dotenv from 'dotenv'

dotenv.config() // thư viện sẽ load value trong file .env

const app = express()
const port = process.env.PORT || 5000

app.use(express.json()) // middleware parse body string => bode json
app.use(cors()) // cho tất cả các request (FE) từ bên ngoài vào để tương tác vs BE
app.use('/api', rootRoutes) // rootRoutes là file chứa các routes con

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
