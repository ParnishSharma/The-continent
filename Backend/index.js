const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000
app.get('/', (req, res) => {
    res.send('Hello Ayush bhai')
})

// app.use('/api/auth',require('./fetch.js'));
app.use('/api/auth',require('./fetch'))




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
