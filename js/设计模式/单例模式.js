/**
 * 单例模式
 * 
 * @describe 保证一个类仅有一个实例，并提供一个访问它的全局访问点
 * @core 确保只有一个实例，并提供全局访问
 */


// 简易版
function setManager(v) {
    this.name = v;
}
setManager.prototype.getName = function() {return this.name};

// 通过闭包将 控制单例的变量缓存到内存中  --只能固定某个类
let getSingle = (function() {
    let _manager = null;
    return function(name) {
        if (!_manager) _manager = new setManager(name);
        return _manager;
    }
})();



// class 类模式
class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name) {
        console.log(this, '11')
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}


console.log(Singleton.getInstance('1'))