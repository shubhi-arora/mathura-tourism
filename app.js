const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");

//const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

 app.get("/:places",function(req,res){
//
   const placename=req.params.places;
//   const name=req.body.prem-mandir;
  res.render(placename);
//
//
 });
app.post("/:places",function(req,res){

    const placename=req.params.places;
    //const name=req.body.prem_mandir;
    res.render(placename);
});
app.get("/index",function(req,res){
  res.redirect("/");
});


app.listen(process.env.PORT|| 3000,function(){
  console.log("Server running on port 3000");
})
