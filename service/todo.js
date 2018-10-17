let Todo = require("../model/todo");


//post  http://localhost/todo
//传过来的数据格式: {content: "内容"},因为其余的别的字段有有了默认值
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
async function deleteTodo(id) {
    await isExistById(id);

    let result = await Todo.deleteOne({_id: id});
    if (result.n !== 1) {
        throw Error(`删除id为${id}的数据时发生了错误`);
    }
    return result;
}

//根据传入的id进行查找,如果不存在数据,抛出错误
async function isExistById(id) {
    let result = await Todo.findOne({_id: id});
    if (!result) {
        throw Error(`id为${id}的记录数据不存在`);
    }
}

//put  http://localhost/todo/001
async function updateTodo(id, todo) {
    await isExistById(id);
    let result = await Todo.updateOne({_id: id}, todo);
    if (result.n !== 1) {
        throw Error(`更新id为${id}的数据时发生了错误`);
    }
}

//get  http://localhost/
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
 
   