const express = require('express');

const app = express();
const port = 80;

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