const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const { error } = require('console');
const port = process.env.PORT || 8000;

//public static ka path
const static_path = path.join(__dirname, "./public");
const templatesPath = path.join( __dirname,"./src/templates/views");
const partialpath = path.join(__dirname,"./src/templates/partials");

app.set('view engine','hbs');
app.set('views',templatesPath);
hbs.registerPartials(partialpath);
app.use(express.static(static_path));


//routing  start ho rha he 

app.get("/" ,(req,res)=>{
    res.render("index")
})
app.get("/about" ,(req,res)=>{
    res.render("about")
})
app.get("/weather" ,(req,res)=>{
    res.render("weather")
})
app.get("*" ,(req,res)=>{
    res.render("404error",{
        errormsg: "Opps page Not Found"
    })
})

app.listen(port ,()=>{
    console.log(`port start ${port}`)
})