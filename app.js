const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', function (req, res) {
  res.render("hai")
})

app.listen(80, function () {
  console.log('Example app listening on port 3000!')
})

