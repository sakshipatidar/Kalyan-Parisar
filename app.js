const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 5000;

app.use('/static' , express.static('static'));
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'pug');
app.set('views', path.join(__dirname , 'views'));

app.get('/' , (req, res)=>{
    res.status(200).render('index.pug');
});
app.get('/wedding' , (req, res)=>{
    res.status(200).render('wedding.pug');
});
app.post('/wedding' , (req, res)=>{
    res.status(200).render('wedding.pug');
});
app.get('/engagement' , (req, res)=>{
    res.status(200).render('engage.pug');
});
app.post('/engagement' , (req, res)=>{
    res.status(200).render('engage.pug');
});
app.get('/familyfunc' , (req, res)=>{
    res.status(200).render('familyfunc.pug');
});
app.post('/familyfunc' , (req, res)=>{
    res.status(200).render('familyfunc.pug');
});
app.get('/gallery' , (req, res)=>{
    res.status(200).render('gallery.pug');
});

//start the server
app.listen(port , ()=>{
    console.log(`The Website started successfully on port ${port}`);
});

