const express = require('express')
const productRoutes = require('./routes/productRoutes')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} port ${PORT}`)
)
