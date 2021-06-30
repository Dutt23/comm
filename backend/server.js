import  express  from 'express'
import  dotenv  from 'dotenv'
import connectDB from '../backend/config/db.js'


import productRoutes from './routes/productRoutes.js'

dotenv.config()
const app = express();

connectDB()

app.get('/', (req, res) =>{
  res.send('API is running...')
})


app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT} on mode : ${process.env.NODE_ENV}`))