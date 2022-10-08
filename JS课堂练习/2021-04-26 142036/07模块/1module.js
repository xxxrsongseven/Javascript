console.log('【调试用】1module.js模块已导入');

// 1 命名导出。导出多个值时非常有用，使用import导入时，必须使用相同名称。
let name = '小明';
function showName(name) {
    return `姓名：${name}`;
}

// 1-1 导出列表，适用于已定义的标识符
// 导出name和showname
export {name,showName}

// 1-2导出单个声明，声明和导出一条语句执行
// 导出值为22的变量age
export let age=22;
// 1-3 导出函数showAge，形参为newName，函数体为返回'年龄：age'
export function showAge(newAge){
    return `年龄：${age}`;
}

// 2默认导出。导出一个值(函数、对象、类等)，使用import导入时，可使用任何名称导入默认导出
// 注意：只能有一个默认导出
// 2-1 导出单个声明作为默认值。声明和导出一条语句执行
//export default function (){ console.log(1) }
function defaultFunction() {
    console.log('默认导出一个函数');
}
// 2-2 导出列表。导出已定义的标识符作为默认值
// 导出defaultFunction函数作为默认值
export {defaultFunction as default};//默认导出

// 3 重命名导出。避免命名冲突。将name变量重命名导出为xm
export {name as xm};