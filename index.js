const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const http = require('http').createServer(app)
const port = process.env.PORT || 8000

const RoutesController = require('./client-react/src/controllers/Routes')

app.use(express.static(path.join(__dirname, 'client-react/build')))
app.use(express.json())
app.use(morgan('tiny'))
app.use('/', RoutesController)

const connectDatabase = async (databaseName = 'homrDB', hostname = 'localhost') => {
  // process.env.MONGODB_URI is for heroku
  const database = await mongoose.connect(process.env.MONGODB_URI || `mongodb://${hostname}/${databaseName}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  console.log(`Database connected at mongodb://${hostname}/${databaseName}`)
  return database
}

// bundle when production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client-react/build'))
}

const startServer = port => {
  http.listen(port, async () => {
    await connectDatabase()
    console.log(`Listening on port: ${port}`)
  })
}

startServer(port)
