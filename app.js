require("express-async-errors"); //处理全局异常错误的模块,放在第一行
require("./db");
let config = require("./config");
let express = require("express");
// let responseUtil = require("./utils/responseUtil");
let morgan = require("morgan"); //处理日志
let todoRouter = require("./router/todo");
let app = express();

//使用全局中间件增强response
app.use(require("./middleware/response_md"));
//使用日志功能
app.use(morgan("combined"));

//解析json格式的数据
app.use(express.json());
//挂载自定义的router
app.use("/todo", todoRouter);


//处理全局异常的中间件
app.use((err, request, response, next) => {
    //使用responseUtil写回失败的响应
    //responseUtil.fail(response, err);
    //使用全局中间件增强response写回失败的响应
    response.fail(err);
});

app.listen(config.PORT);

   