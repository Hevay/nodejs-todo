let Todo = require("../model/todo");


//post  http://localhost/todo
//传过来的数据格式: {content: "内容"},因为其余的别的字段有有了默认值
/**
 * 添加数据
 * @param todo
 * @returns {Promise<*>}
 */
async function addTodo(todo) {
    //首先进行查找,如果要添加的数据已经存在,抛出一个错误
    let result = await Todo.findOne({content: todo.content});
    if (result) {
        throw Error("要添加的待办事项已经存在,请勿重复添加");
    }
    result = await Todo.create(todo);
    return result;
}

//delete  http://localhost/todo/001
/**
 * 根据id删除数据
 * @param id
 * @returns {Promise<void>}
 */
async function deleteTodo(id) {
    await isExistById(id);
    let result = await Todo.deleteOne({_id: id});
    if (result.n !== 1) {
        throw Error(`删除id为${id}的数据时发生了错误`);
    }
}

//根据传入的id进行查找,如果不存在数据,抛出错误
/**
 * 根据传入的id查找数据库,判断是否存在该id对应的内容
 * @param id
 * @returns {Promise<void>}
 */
async function isExistById(id) {
    let result = await Todo.findOne({_id: id});
    if (!result) {
        throw Error(`id为${id}的记录数据不存在`);
    }
}

//put  http://localhost/todo/001
/**
 * 根据传入的id和内容修改数据
 * @param id  要更新的数据的id
 * @param todo  更新后的数据,格式为: {content: "更新后的内容"}
 * @returns {Promise<void>}
 */
async function updateTodo(id, todo) {
    await isExistById(id);
    let result = await Todo.updateOne({_id: id}, todo);
    if (result.n !== 1) {
        throw Error(`更新id为${id}的数据时发生了错误`);
    }
}

//get  http://localhost/
/**
 * 查找所有的数据并返回
 * @returns {Promise<*>}
 */
async function findAll() {
    let result = await Todo.find();
    console.log("查找所有的数据结果: " + result);
    return result;
}

module.exports = {
    addTodo,
    deleteTodo,
    updateTodo,
    findAll
}
 
   