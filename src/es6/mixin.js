export function mixin(...list) {
    return function(target) {
        Object.assign(target.prototype, ...list);
    }
}

export function readonly(target, name, descriptor) {
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    console.log("target =>", target);
    console.log("name =>", name);
    descriptor.writable = false;
    return descriptor;
}

export function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}
