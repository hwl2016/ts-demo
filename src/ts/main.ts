// import { Son, Api, Clock, Employee } from './base'
// import { AAA } from './base'

// const son = new Son('Mike', 28)
// son.say('Hello')
// Api.test()

// const clock = new Clock(16, 3)
// clock.setTime('2019-05-25')
// const t = clock.getTime()
// console.log(t)

// const { spawn } = require('child_process');
// const spawn = require('cross-spawn');
// const cmd = spawn('ls', ['-lh', '/usr']);
// const add = spawn('git', ['add', '.']);
// execGit(add, 'git add');

// const commit = spawn('git', ['commit', '-m', 'haha']);
// execGit(commit, 'git commit');

// function execGit(cmd, cmdName) {
//     cmd.stdout.on('data', (data) => {
//         console.log(`${cmdName} stdout: ${data}`);
//     });
    
//     cmd.stderr.on('data', (data) => {
//         console.log(`${cmdName} stderr: ${data}`);
//     });
    
//     cmd.on('close', (code) => {
//         console.log(`${cmdName} 子进程退出码：${code}`);
//     });
// }

// const aaa = new AAA();
// console.log(aaa.test())


// let aaa: any = 4;
// let a = aaa.ifItExists();
// let b = aaa.toFixed(2);
// console.log(b)

// let bbb: Object = 4;
// let ccc: object = {2:3};
// let c = bbb.toFixed(2);

// declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK
// create(undefined); // OK
// // create(42); // Error
// // create("string"); // Error
// // create(false); // Error

let someValue: any = 'Michael';
// let strLength: number = someValue.length;
let strLength: number = (someValue as string).length;   // 断言类型
// let strLength: number = (<string>someValue).length;   // 断言类型

let input: number[] = [1, 2, 3, 4];
let [first, second] = input;

[first, second] = [second, first];

// console.log(first); // outputs 1
// console.log(second); // outputs 2

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
// const iData: [number, number] = 
// f(iData);

type C = {a: string, b?: number}
function abc({a, b = 0}: C = {a: ""}): void {
    console.log(a, b);
}

// abc()   // OK
// abc({a: 'haha'})   // OK
// abc({a: 'haha', b: 10})   // OK
// abc({})   // Error

class D {
    p = 12;
    m() {
    }
}
let d = new D();
let clone = { ...d };
// clone.p; // ok
// clone.m(); // error!
// console.log('clone => ', clone);



abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void; // 必须在派生类中实现
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
greeter2.greeting = 'Michael';
console.log(greeter2.greet());

// class Point {
//     x: number;
//     y: number;
// }
// interface Point3d extends Point {
//     z: number;
// }
// let point3d: Point3d = {x: 1, y: 2, z: 3};


function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        // const _this = this;
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity({a: 123, length: 1});


// 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// let x: {[propName: string]: number} = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.


// 在泛型里使用类类型
function create<T>(c: {new(): T; }): T {
    return new c();
}


class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: {new(): A;}): A {
    return new c();
}

createInstance(Lion).keeper.nametag = '1';  // typechecks!  string
createInstance(Bee).keeper.hasMask = true;   // typechecks!  boolean


enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let hey = Status.Ready;
// hey = Color.Green;  // Error


interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    const Haha: (Fish | Bird) =  {
        layEggs() {},
        swim() {},
        fly() {}
    }
    return Haha;
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors

// if ((<Fish>pet).swim) {
//     (pet as Fish).swim();
// } else {
//     (<Bird>pet).fly();
// }

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) {
    pet.swim();
}else {
    pet.fly();
}
