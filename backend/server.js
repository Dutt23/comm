import  express  from 'express'
import  dotenv  from 'dotenv'
import products from './data/products.js'
import connectDB from '../backend/config/db.js'

dotenv.config()
const app = express();

connectDB()

app.get('/', (req, res) =>{
  res.send('API is running...')
})

app.get('/api/products', (req, res) =>{
  res.json(products)
})

app.get('/api/products/:id', (req, res) =>{
  const id = req.params.id
  const product = products.find(p => p.id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT} on mode : ${process.env.NODE_ENV}`))