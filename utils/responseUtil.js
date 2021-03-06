/**
 @Name:           responseUtil
 @Description:   response写回数据的工具类
 @Version:        1.0
 @Author:         Hevay
 @Date: create in 2018/10/17  23:01
 */

//请求成功的时候,写回响应使用的方法
function success(response, result) {
    response.send({
        code: 1,
        msg: "操作成功!",
        data: result
    });
}

//请求失败的时候,写回响应使用的方法
function fail(response, err) {
    response.send({
        code: -1,
        msg: "操作失败",
        data: err.toString()
    });
}

module.exports = {
    success,
    fail
}


 
   