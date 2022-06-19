const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'));

// Set template engine as pug
app.set('view engine', 'pug');

//Set the view directory 
app.set('views', path.join(__dirname,'views'));

app.get('/demo', (req, res) => {
    res.render('demo', { title: 'Hey Brijesh', message: 'Hello there and thanks for telling me how to use pug!' })
  });

app.get("/", (req, res)=>{
    res.end('This is the home page of my first Express app');
});

app.get("/about", (req, res)=>{
    res.end('This is the about page of my first Express app');
});

app.post("/about", (req, res)=>{
    res.end('This is the post request of about page of my first Express app');
});

app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`);
});