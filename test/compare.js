function createComparisonFunction(propertyName) {
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2){
         return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}
var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];
data.sort(createComparisonFunction("name"));
console.log(data[0].name); //Nicholas
data.sort(createComparisonFunction("age"));
console.log(data[0].name); //Zachary

function factorial(num){
    if (num <=1) {
        return 1;
    } else {
        return num * arguments.callee(num-1)
    }
}

var i = 0;
function outer(){
    if(i < 10) {
        inner();
    } else {
        console.log("game over");
    }
    
}
function inner(){
    console.log('i ->', i);
    i++;
    arguments.callee.caller();
}
outer();


class AAA {
    a = 0;
    b = 0;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    set A(a) {
        console.log('set a:', a)
        this.a = a
    }
    get A() {
        console.log('get a')
        return this.a
    }
    set B(b) {
        console.log('set b:', b)
        this.b = b
    }
    get B() {
        console.log('get b')
        return this.b
    }
    get [Symbol.toStringTag]() {
        return "AAA"
    }
}
var aaa = new AAA(1, 4)

var BBB = {
    _x: 1,
    _y: 2,
    get x() {
        console.log('get x')
        return this._x;
    },
    set x(n) {
        console.log('set x:', n)
        this._x = n
    },
    [Symbol.toStringTag]: "BBB"
}


function CCC() {
    this.a = 1;
    this.b = 2
}

CCC.prototype = {
    x: 3,
    y: 4,
    sayHi: () => {console.log("hi")}
}

var c = new CCC()
Object.defineProperties(c, {
    name: {
        value: "Mike"
    }
})
c.age = 28

Object.keys(c);
Object.getOwnPropertyNames(c);
for(var k in c) {
    console.log(k + ' -> ' + c[k]);
}

/**
 * Object.defineProperty
 * Object.defineProperties
 * Object.getOwnPropertyDescriptor
 * Object.getOwnPropertyDescriptors ES6
 * Object.isPrototypeOf
 * Object.getPrototypeOf
 * Object.setPrototypeOf    ES6
 * prop in Obj
 * Object.hasOwnProperty
 * Object.keys
 * Object.getOwnPropertyNames
 * Object.getOwnPropertySymbols ES6
 */