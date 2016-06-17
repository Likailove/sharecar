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

/*PersonModel.create({name:"likai",age:28},function(err,doc){
     if(err){
     console.log("err"+err);
     }else{
     console.log(util.inspect(doc));
     }
 })*/

/*PersonModel.create([{name:"likai1",age:21},{name:"likai2",age:22},
    {name:"likai3",age:23},{name:"likai4",age:24},
    {name:"likai5",age:25},{name:"likai6",age:26},
    {name:"likai7",age:27},{name:"likai8",age:28},
    {name:"likai9",age:29},{name:"likai10",age:30}],function(err,doc){
         if(err){
         console.log("err"+err);
         }else{
         console.log(util.inspect(doc));
         }
 })*/

//查询
/*PersonModel.find({},function(err,docs){
    if(err){
        console.log("err"+err);
    }else{
        console.log(docs);
    }
    console.log(docs[0].name);
})*/

//只查询name列
/*PersonModel.find({},{name:1,_id:0},function(err,docs){
 if(err){
 console.log("err"+err);
 }else{
 console.log(docs);
 }
 console.log(docs[0].name);
 })*/

//根据id查询单条记录
/*PersonModel.findById('5763b67b733f39202781331b',function(err,docs){
    if(err){
        console.log("err"+err);
    }else{
        console.log(docs);
    }
})*/

//ne  不等于
/*PersonModel.find({age:{$gt:28,$lte:29}},function(err,docs){
    if(err){
        console.log("err"+err);
    }else{
        console.log(docs);
    }
})*/

/*PersonModel.find({age:{$in:[28,29]}},function(err,docs){
    if(err){
        console.log("err"+err);
    }else{
        console.log(docs);
    }
})*/

/*PersonModel.find({$or:[{name:"likai1"},{age:29}]},function(err,docs){
    if(err){
        console.log("err"+err);
    }else{
        console.log(docs);
    }
})*/

/*PersonModel.find({name1:{$exists:true}},function(err,docs){
    if(err){
        console.log("err"+err);
    }else{
        console.log(docs);
    }
})*/

PersonModel.find({},null,{sort:{name:-1,age:1},skip:2,limit:3},function(err,docs){
    if(err){
        console.log("err"+err);
    }else{
        console.log(docs);
    }
})

/*PersonModel.findOne({},function(err,docs){
    if(err){
        console.log("err"+err);
    }else{
        console.log(docs);
    }
})*/

//修改
/*var conditions = {age:28};
var update = {$set:{age:30}};
PersonModel.update(conditions,update,{multi:true},function(err){
    if(err){
        console.log("err"+err);
    }else{
        console.log('update success!');
    }
})*/

//删除
/*var conditions = {age:26};
PersonModel.remove(conditions,function(err){
    if(err){
        console.log("err"+err);
    }else{
        console.log('delete success!');
    }
})*/
