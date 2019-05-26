
export default class Api {
    
    public static aaa(flag: boolean) {
        let x, y = 2;
        if(flag) {
            x = 10
        }
        console.log(x)
        return x+y
    }
    public static bbb() {
        // for(var i = 0; i < 10; i++) {
        //     setTimeout(function() { console.log(i); }, 100 * i);
        // }

        // for (var i = 0; i < 10; i++) {
        //     (function(i) {
        //         setTimeout(function() { console.log(i); }, 100 * i);
        //     })(i);
        // }

        for(let i = 0; i < 10; i++) {
            setTimeout(function() { console.log(i); }, 100 * i);
        }
    }
    public static ccc() {
        const o = {a: 'aaa', b: 'bbb'}
        const {a: m, b: n} = o
        const [, c, d] = [1,2,3]
        console.log(n, m, c, d)
    }
    public static error(message: string): void {
        throw new Error(message);
    }
    public static interfaceTest(labelledObj: LabelledValue) {
        // let a: number[] = [1,2,3,4];
        let t: ReadonlyArray<number> = [1,2,3,4];   // 只读属性
        console.log('ReadonlyArray', t[1])
        console.log(labelledObj.label);
    }
    public static area(config: SquareConfig): { color: string; area: number, volume: number } {
        let obj = {
            color: '',
            area: 0,
            volume: 0
        }
        if(config.color) {
            obj.color = config.color
        }
        if(config.width) {
            obj.area = config.width ** 2
            obj.volume = config.width ** 3
        }
        return obj
    }
    /**
     * ts基本数据类型：
     *   boolean number string null undefined symbol 
     *   Array Tuple enum Object
     *   Any Void Never 
     *   类型断言
     */
    public static dataType() {
        const flag: boolean = true
        const num: number = 123
        let str: string = 'hello'
        str = '345'
        let u: undefined = undefined;
        let n: null = null;

        // 数组
        let list1:number[] = [1,2,3,4,5];
        let list2:Array<String> = ['1', 'b', 'ccc', '5']
        list2.push('haha')

        // 元组
        let x: [string, number] = ['hello', 123];
        x.push(123)

        // console.log(list2)
        // Api.aaa(false)
        // Api.ccc();
        console.log(x[1])

        // 枚举
        enum Color {
            Red, 
            Green, 
            Blue
        }
        let c: Color = Color.Blue;
        console.log(c)  // 2

        // console.log(this.error('error...'))

        // 类型断言  尖括号  as
        let someValue: any = "this is a string";
        let strLength: number = (<string>someValue).length;
        let strLength2: number = (someValue as string).length;
        console.log(strLength, strLength2)

        Api.interfaceTest({
            size: 10, 
            label: "Size 10 Object"
        })

        const ddd: SquareConfig = {
            opacity: '0.5',
            width: 20
        } as SquareConfig;

        const eee: SquareConfig = {
            opacity: '0.5',
            width: 10,
            color: '#fff'
        }

        console.log(Api.area(ddd));
    }
    public static test() {
        console.log('=========================')
        this.dataType()
        console.log('=========================')

        let fun1: IFun1;
        fun1 = function(a: string, b: number) {
            return a + b
        }
        console.log(fun1('123', 456))
    }
}

interface LabelledValue {
    label: string;
    size?: number;
}

interface SquareConfig {
    color?: string;
    width?: number;
    // TypeScript支持两种索引签名：字符串和数字
    // 可以有任意数量的属性，并且只要它们不是color和width
    [propName: string]: any;  
    [id: number]: string;  
}

interface IAbc {
    [propName: string]: any;  
    [id: number]: string;  
}

// 函数类型
interface IFun1 {
    (a: string, b: number): string;
}
