import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

var app=express();
var port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{

    res.render("index.ejs");
});






app.listen(port,()=>{
    console.log(`Server is running in ${port} port location click here to redirect http://localhost:3000/ `);
})