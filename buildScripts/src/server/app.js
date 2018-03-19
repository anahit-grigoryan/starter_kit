import path from "path";
import express from "express";
import open from "open";

/* eslint-disable no-console*/

const port = 8000;
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/index.html'));
});

app.listen(port,err=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server start on port 8000');
        open('http://localhost:' + port);
    }
});