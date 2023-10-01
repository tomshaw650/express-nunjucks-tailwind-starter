// node deps
const path = require('path')

// npm deps
const express = require('express')

// local deps
const nunjucks = require('./middleware/nunjucks')

// express init
const app = express()
nunjucks(app)

app.use(express.static(path.join(__dirname, 'public')))

// routes
app.get('/', (_, res) => {
  res.render('index', {
    title: "homepage",
    name: "tom"
  })
})

// app listener
app.listen(3000, () => {
  console.log(`app listening on http://localhost:3000`)
})
