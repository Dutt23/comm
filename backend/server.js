import  express  from 'express'
import  dotenv  from 'dotenv'
import connectDB from '../backend/config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express();

connectDB()

app.get('/', (req, res) =>{
  res.send('API is running...')
})

app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT} on mode : ${process.env.NODE_ENV}`))

app.use(notFound)
app.use(errorHandler)