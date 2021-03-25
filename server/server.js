/* DEPENDENCIES */
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
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
  secret: process.env.SECRET_KEY, 
  resave: false, 
  saveUninitialized: true, 
  store: new MongoStore({
    mongoUrl: process.env.DB_CONNECTION_STRING
  }),
  cookie: { 
    httpOnly: true, 
    secure: false, 
    maxAge: 5.184E+8 //6 days 
  },
}))

app.use(cookieParser(process.env.SECRET_KEY))



/* PASSPORT SETUP */
const { passportLocal, serialize, deserialize } = require('./passport/local')
app.use(passport.initialize())
app.use(passport.session())
passport.use(passportLocal)


/* ROUTES */
app.use('/login', require('./routes/login'))
app.use('/logout', require('./routes/logout'))
app.use('/register', require('./routes/register'))
app.use('/kipper', require('./routes/kipper'))
app.use('/user', require('./routes/user'))
app.use('/', require('./routes/home'))




/* INITIALIZE SERVER */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})