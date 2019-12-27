import { mixin, readonly, log } from "./mixin";
import { fibonacci, objectEntries } from "./generator";

const Foo = {
    foo() {
        console.log("foo");
    }
}

@mixin(Foo)
class C {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    @readonly
    haha() {
        return `${this.first} ${this.last}`;
    };
    @log
    method() {
        // this.haha = () => {
        //     return "123";
        // }
        const h = this.haha();
        console.log(h);
    }
}

// var c = new C("wenlong", "hu");
// c.method(1);
// c.foo();

// for(const i of fibonacci()) {
//     if(i > 1000) break;
//     console.log(i);
// }

const obj = { first: 'Jane', last: 'Doe' };
for (const [key, value] of objectEntries(obj)) {
  console.log(`${key}: ${value}`);
}