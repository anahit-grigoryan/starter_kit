import path from "path";
import express from "express";
import open from "open";
import webpack from'webpack';
import config from'../../../webpack.config.dev';

/* eslint-disable no-console*/

const port = 8000;
const app = express();
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.use(express.static(__dirname + '/../client'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/index.html'));
});

app.get('/users',(req,res) => {
    res.json([
        {"id":1, "firsName": "Name1", "lastName":"LastName1", "email":"email1@mail.ru"},
        {"id":2, "firsName": "Name2", "lastName":"LastName2", "email":"email2@mail.ru"},
        {"id":3, "firsName": "Name3", "lastName":"LastName3", "email":"email3@mail.ru"},
        {"id":4, "firsName": "Name4", "lastName":"LastName4", "email":"email4@mail.ru"},
        {"id":5, "firsName": "Name5", "lastName":"LastName5", "email":"email5@mail.ru"}
        ])
});


app.listen(port,err=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server start on port 8000');
        open('http://localhost:' + port);
    }
});