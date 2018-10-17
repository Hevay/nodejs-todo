require("express-async-errors"); //处理全局异常错误的模块,放在第一行
require("./db");
let express = require("express");
let todoRouter = require("./router/todo");
let app = express();

//解析json格式的数据
app.use(express.json());
//挂载自定义的router
app.use("/todo", todoRouter);
//处理全局异常的中间件
app.use((err, request, response, next) => {
    response.send({
        code: -1,
        msg: "操作失败",
        data: err.toString()
    })
})

app.listen(8000);

   