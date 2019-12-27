export function * fibonacci() {
    let [prev, curr] = [0, 1];
    while(true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

export function * objectEntries(obj) {
    const keys = Reflect.ownKeys(obj);
    for(const key of keys) {
        yield [key, obj[key]];
    }
}

// 交通信号灯
function * trafficSignal() {
    const colors = [
        ...light(3, "red"), 
        ...light(2, "orange"), 
        ...light(1, "green")
    ];
    while(true) {
        yield* colors;
    }
}

function * light(times, color) {
    for (let i = 0; i < times; i++) {
        yield color;
    }
}

function interval(duration) {
    const ts = trafficSignal();
    setInterval(() => {
        const ret = ts.next();
        console.log(ret.value);
    }, duration)
}

// interval(1000);

// Generator 函数逐行读取文本文件。
export function* numbers() {
    let file = new FileReader("numbers.txt");
    try {
        while(!file.eof) {
            yield parseInt(file.readLine(), 10);
        }
    } finally {
        file.close();
    }
}

// 对数组进行展开  [1,2,['a',[,'q',6,7,[1,2,3]]], 3,4,[],['b','c','5',6],'q']
function * flatten(arr) {
    for(let ele of arr) {
        if(typeof ele !== 'object') {
            yield ele;
        }else {
            yield* flatten(ele);
        }
    }
}
// var arr = [1,2,['a',[,'q',6,7,[1,2,3]]], 3,4,[],['b','c','5',6],'q'];
// var ft = flatten(arr);
// [...ft];
