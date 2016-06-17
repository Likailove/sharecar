var util =require('util');
var mongoose =require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/nodedb');
//数据库连接
db.connection.on('error',function(err){
    console.log("database connect failed:"+err);
});

db.connection.on('open',function(){
    console.log("database connect success!");
});

var personSchema = new mongoose.Schema({
    time: {type: Date, default: Date.now, required: true},
    age: {type: Number, default: 20, required: true},
    name: {type: String, default: '', required: true}
},{collection:'personTable'});

var PersonModel = db.model("person",personSchema);

var PersonEntity = new PersonModel({
    name:"likai",
    age:26
});

/*console.log("name="+PersonEntity.name);
console.log("age="+PersonEntity.age);
console.log("time="+PersonEntity.time);*/

//保存
/*PersonEntity.save(function(err,doc){
    if(err){
        console.log("err"+err);
    }else{
        console.log(util.inspect(doc));
    }
})*/

PersonModel.create({name:"likai",age:28},function(err,doc){
     if(err){
     console.log("err"+err);
     }else{
     console.log(util.inspect(doc));
     }
 })


//查询
PersonModel.find({},function(err,docs){
    if(err){
        console.log("err"+err);
    }else{
        console.log(docs);
    }
    console.log(docs[0].name);
})

