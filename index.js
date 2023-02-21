const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/courses.json');

app.get('/course', (req, res)=>{
    res.send(course);
})


app.get('/', (req, res)=>{
    res.send('Server Api running');
})

app.listen(port, ()=>{
    console.log('Successfully working')
})