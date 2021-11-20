const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactPortfolio',{useNewUrlParser:true});
const fs = require('fs');
const bodyparser = require('body-parser');
const app = express();
const port = 1000;

// define mongoose schima
var contactSchema = new mongoose.Schema({
     name:String,
     phone:String,
     email:String
 });
 var Contact = mongoose.model('Contact',contactSchema);
app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
     res.status(200).render('home.pug');
});
app.get('/about',(req,res)=>{
     res.status(200).render('about.pug');
});
app.get('/contactme',(req,res)=>{
     res.status(200).render('contact.pug');
});

app.post('/contactme',(req,res)=>{
     var mydata = new Contact(req.body);
     mydata.save().then(()=>{
          res.send("Tthans for contacting me");
     }).catch(()=>{
          res.status(400).send("item was not saved to db");
     });
     // res.status(200).render('contact.pug');
});

app.listen(port,()=>{
    console.log(`application started successfully at prt ${port}`);
});  