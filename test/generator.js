function * flatten(arr) {
    for(let ele of arr) {
        if(typeof ele !== 'object') {
            yield ele;
        }else {
            yield* flatten(ele);
        }
    }
}

const arr = [1,2,['a',[,'q',6,7,[1,2,3]]], 3,4,[],['b','c','5',6],'q'];
const ft = [...flatten(arr)];
console.log(ft);
