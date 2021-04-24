var F = function () {

}

Object.prototype.a = function () {
    console.log("a")
}

Function.prototype.b = function () {
    console.log("b")
}

var f = new F();

f.a(); // 实例f调用a，自身没有，从前原型链中查找f.__proto__ == F.prototype
f.b(); // F.prototype中没有a方法，继续在原型链中查找 F.prototype.__proto__ == Object.prototype, Object.prototype中有a方法，没有b方法，f.b()调用会报错
F.a(); // F.a()，构造函数F调用a方法，自身没有，从其原型链中查找 F.__proto__ = Function.prototype，Function.prototype中有b方法，没有a方法，继续在原型链中查找
F.b(); // Function.prototype.__proto__ == Object.prototype, Object.prototype中有a方法，打印"a"