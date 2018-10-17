let mongoose = require("mongoose");
let schema = new mongoose.Schema({
        //待办事项
        content: {
            type: String, //字符串类型
            require: [true, "待办事项不能为空"],  //require非空类型
            unique: [true, "待办事项不能重复"]//unique唯一类型
        },
        //是否完成
        isNone: {
            type: Boolean,
            default: false
        },
        //创建时间
        createTime: {
            type: Date,
            default: Date.now()
        }
    })
;
//第一个参数:在mongoDB中生成的表名, 
//第二个参数: 将定义的字段用于生成的表中
module.exports = mongoose.model("todo", schema);


// var blogSchema = new Schema({
//     title: String,
//     author: String,
//     body: String,
//     comments: [{body: String, date: Date}],
//     date: {type: Date, default: Date.now},
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs: Number
//     }
// });
//字段类型
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
// Decimal128
// Map





 
   





 
   




 
   