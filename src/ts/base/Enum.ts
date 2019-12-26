export class AAA {
    private readonly aaa = 123;
    private _name: string = 'Michael';

    constructor(){
    }
    get name(): string {
        console.log('getter...')
        return this._name
    }
    set name(name: string) {
        console.log('setter...')
        this._name = name
    }

    test() {
        let a = Haha.A; // 0
        let nameOfA = Haha[a];  // 枚举的反向映射  根据枚举值找到枚举属性
        console.log(a, nameOfA)
        let b = this.test2(E)
        console.log('运行时的枚举 => ', b)
        return 'test';
    }

    test2(obj: { Y: number }) {
        return obj.Y;
    }

}

enum Haha {
    A
}

enum E {
    X, Y, Z
}
