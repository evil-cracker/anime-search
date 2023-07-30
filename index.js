import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

var app=express();
var port=3000;







app.listen(port,()=>{
    console.log(`Server is running in ${port} port location `);
})