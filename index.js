import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

var app=express();
var port=3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var myurl="https://kitsu.io/api/edge/anime?filter[text]="






app.get("/",(req,res)=>{
    res.render("index.ejs");
   
});




app.post("/submit", async(req,res)=>{
    
   var name= req.body.ani;
   name=name.toUpperCase();

   const details = await axios.get(myurl+name);

   var gen= details.data.data[0].relationships.genres.links.related;
   const gener = await axios.get(gen);




   
    
    res.render("detail.ejs",{
    
     name:name,
     data:details.data.data,
     gener:gener.data.data,
    });
});





app.listen(port,()=>{
    console.log(`Server is running in ${port} port location click here to redirect http://localhost:3000/ `);
});