export interface IClock {
    currentTime: string;
    setTime(d: string): any;
}

class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {}   // 参数属性  方便地让我们在一个地方定义并初始化一个成员
    getName() {
        return this.name
    }
}
const octopus = new Octopus('Jack')
console.log(octopus.getName())

export class Clock implements IClock {
    currentTime: string;
    constructor(h: number, m: number) {
        
    }
    setTime(d: string): void {
        this.currentTime = d
    }
    getTime(): string {
        return this.currentTime
    }
}