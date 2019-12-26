import { mixin } from "./mixin";

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

const Foo = {
    foo() {
        console.log("foo");
    }
}

@mixin(Foo)
class C {
    @f()
    @g()
    method() {
        console.log('C: method(): called')
    }
}

var c = new C();
c.method();
// c.foo();