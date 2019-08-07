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

console.log(first); // outputs 1
console.log(second); // outputs 2

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

abc()   // OK
abc({a: 'haha'})   // OK
abc({a: 'haha', b: 10})   // OK
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
console.log('clone => ', clone);