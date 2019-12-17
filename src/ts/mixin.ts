export function mixin(list: IFoo) {
    return function(target: any) {
        (<any>Object).assign(target.prototype, list);
    }
}

interface IFoo {
    foo: () => void;
}