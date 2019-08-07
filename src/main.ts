// import { Son, Api, Clock, Employee } from './base'
import { AAA } from './base'

// const son = new Son('Mike', 28)
// son.say('Hello')
// Api.test()

// const clock = new Clock(16, 3)
// clock.setTime('2019-05-25')
// const t = clock.getTime()
// console.log(t)

const { spawn } = require('child_process');
// const spawn = require('cross-spawn');
// const cmd = spawn('ls', ['-lh', '/usr']);
const add = spawn('git', ['add', '.']);
execGit(add, 'git add');

const commit = spawn('git', ['commit', '-m', 'haha']);
execGit(commit, 'git commit');

function execGit(cmd, cmdName) {
    cmd.stdout.on('data', (data) => {
        console.log(`${cmdName} stdout: ${data}`);
    });
    
    cmd.stderr.on('data', (data) => {
        console.log(`${cmdName} stderr: ${data}`);
    });
    
    cmd.on('close', (code) => {
        console.log(`${cmdName} 子进程退出码：${code}`);
    });
}

const aaa = new AAA();

console.log(aaa.test())
