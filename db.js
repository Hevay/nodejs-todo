/**
 @Name:           db
 @Description:    mongoDB数据库
 @Version:        1.0
 @Author:         Hevay
 @Date: create in 2018/10/17  10:28
 */

let mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});
let db = mongoose.connection;

db.on("error", (err) => {
    console.log(`数据库连接失败: ${err.toString()}`);
});

db.once("open", () => {
    console.log("连接mongodb成功！");
});

module.exports = db;
   