const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')



//public directory path
const publicDirectoryPath = path.join(__dirname, '../../public')

//views path
const viewsPath = path.join(publicDirectoryPath, '/views')

// View engine setup
app.set('view engine', 'hbs')
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath))


app.get('/', (req, res) => {
    res.render('index')

})


app.listen(3000, () => {
    console.log('server up on port 3000')
})