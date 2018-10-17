/**
 @Name:           todo
 @Description:    分模块开发之router
 @Version:        1.0
 @Author:         Hevay
 @Date: create in 2018/10/17  20:55
 */
let router = require("express").Router();
let todoService = require("../service/todo");
// let responseUtil = require("../utils/responseUtil");
require("../middleware/response_md")
//添加数据,post请求
/**
 * 添加数据
 * @param todo
 * get请求    url: http://localhost:8000/todo
 */
router.post("/", async (request, response) => {
    let body = request.body;
    let result = await todoService.addTodo(body);
    //使用responseUtil写出成功的响应
    //responseUtil.success(response, result);
    //使用增强response写回成功的响应
    response.success(result);
});


/**
 * 根据id删除数据
 * @param id
 * delete请求  url : http://localhost:8000/todo/id
 */
router.delete("/:id", async (request, response) => {
    let id = request.params.id;
    await todoService.deleteTodo(id);
    //使用responseUtil写出成功的响应
    //responseUtil.success(response);
    //使用增强ressponse写回成功的响应
    response.success();
});


/**
 * 根据传入的id和内容修改数据
 * @param id  要更新数据的id,在请求路径中可以拿到
 * @param todo  要更新的数据的内容,在请求体中可以拿到
 * put   url: http://localhost:8000/todo/id
 */
router.put("/:id", async (request, response) => {
    let id = request.params.id;
    let body = request.body;
    todoService.updateTodo(id, body);
    //使用responseUtil写出成功的响应
    //responseUtil.success(response);
    //使用增强ressponse写回成功的响应
    response.success();
});

/**
 * 查找所有的数据并返回
 * get请求  url : http://localhost:8000/todo
 * @returns {Promise<*>}
 */
router.get("/", async (request, response) => {
    let result = await todoService.findAll();
    //使用responseUtil写出成功的响应
    //responseUtil.success(response, result);
    //使用增强response写回成功的响应
    response.success(result);
})

module.exports = router;
 
   