/**
 * Created by LK45 on 2016/6/20.
 */
var express = require('express');
var app = express();
//middle  use需要next
//next()的使用
//req.host --主机名不包含端口号
//req.path --路径名
//req.query --请求参数对象
//req.params --路径参数 /list/:id/:name
//route
app.get('/list',function(req,res){
    res.send(req.url);
});
app.post('/list',function(req,res){
    res.send(req.url);
});
app.all('/list',function(req,res){
    res.send(req.url);
});
app.listen(8080);


//ejs
var path = require('path');
app.set('view engine','html');
app.set('views',__dirname);
app.engine("html",require("ejs").__express);
// 定义静态文件目录
app.use(express.static(path.join(__dirname, 'public'),{
    dotfiles:'deny',
    index:'index.html',
    setHeaders:function(res){
        res.setHeader('name','lk');
    }
}));
app.get('/',function(req,res){
    res.render('index2.html',{name:'lk',age:22});
});

//bodyParser请求体
var bodyParser = require('body-parser');
app.use(bodyParser.json());//json
app.use(bodyParser.urlencoded({ extended: true }));//form表单