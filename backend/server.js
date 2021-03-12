/* DEPENDENCIES */
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')

/* GENERAL SETUP */
require('dotenv').config()

const app = express()
const PORT = 3001 || process.env.PORT

/* DATABASE CONFIG */
mongoose.connect(
  process.env.DB_CONNECTION_STRING, 
  {useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('connected to db')
)
const db = mongoose.connection

//MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use(session({
  secret: 'secretcode', 
  resave: true, 
  saveUninitialized: true
}))
app.use(cookieParser("secretcode"))


/* PASSPORT SETUP */
const { passportLocal, serialize, deserialize } = require('./passport/local')
app.use(passport.initialize())
app.use(passport.session())
passport.use(passportLocal)

/* ROUTES */
app.use('/login', require('./routes/login'))
app.use('/register', require('./routes/register'))



/* INITIALIZE SERVER */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})