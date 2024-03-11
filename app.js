const express = require('express')
const app = express()
const allRoutes = require('./routes/route')

// convert form data to javascript object and put into request body
app.use(express.urlencoded({extended: false}))

// convert json to javascript object and put into request body
app.use(express.json())

app.use(allRoutes)

app.use((req, res, next) => {
    res.send('<h1>Page not found</h1>');
});


app.listen(7000, ()=>{
    console.log('server is running........')
})
