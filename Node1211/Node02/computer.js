function add(a,b) {
    return a + b + y + z;
}
// console.log(add(1,2));

var x = 10;
var y = 100;
var z = 50;

//模块内定义变量需要使用var 否则为全局变量
m = 100;
//定义模块的时候 需要对位留接口
//将模块导出 并设置导出接口

module.exports = {
    //对外接口名：真正接口
    Add:add,
    y : x
};
