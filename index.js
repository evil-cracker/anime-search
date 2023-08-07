import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

var app=express();
var port= process.env.PORT || 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var myurl="https://kitsu.io/api/edge/anime?filter[text]="






app.get("/",(req,res)=>{
    res.render("index.ejs");
   
});




app.post("/submit", async(req,res)=>{



    try {
        var name= req.body.ani;
   name=name.toUpperCase();

   const details = await axios.get(myurl+name);

   var gen= details.data.data[0].relationships.genres.links.related;
   const gener = await axios.get(gen);




   console.log(details.data.data.length);
   
    res.render("detail.ejs",{
    
     name:name,
     data:details.data.data,
     gener:gener.data.data,
     len: details.data.data.length,
    });
    } catch (error) {
console.log(error);
        res.render("error.ejs",{
            er:error.message,
        })
        
    }
    
   
});





app.listen(port,()=>{
    console.log(`Server is running in ${port} port location click here to redirect http://localhost:3000/ `);
});