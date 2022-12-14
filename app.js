const express = require("express")
require('dotenv').config()
const app = express()
const port = process.env.PORT || 4000
const router = require("./routes")
const session = require("express-session")


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookies: {
      secure: false,
      sameSite: true
    }
  }))

  
app.use('/', router)

app.listen(port, ()=>{
    console.log(`Example app listenin on port ${port}`)
})