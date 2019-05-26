let passcode = "secret passcod";

// 存取器
export class Employee {
    private _fullName: string = 'Tom';

    get fullName(): string {
        console.log('getter...');
        return this._fullName;
    }

    set fullName(newName: string) {
        console.log('setter...');
        if (passcode && passcode === "secret passcode") {
            this._fullName = newName;
        }else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

console.log('========= employee ============');
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
console.log('========= employee ============');


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
console.log('========= Greeter ============');
let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

console.log('========= Greeter ============');

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
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
console.log('========= Deck ============');
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log(pickedCard)
console.log('========= Deck ============');


// 回调函数的this
interface IUIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

interface Event {
    message?: string;
}

class Handler {
    info: string;
    onClickBad(this: Handler, e: Event) {
        // oops, used this here. using this callback would crash at runtime
        // this.info = e.message;
        console.log('clicked!');
    }
    onClickGood = (e: Event) => { this.info = e.message }
}

class UIElement implements IUIElement {
    addClickListener(): void {

    }
}
let h = new Handler();
let uiElement = new UIElement();
// uiElement.addClickListener(h.onClickGood); // error!


// 函数重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

// 泛型
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

const lt: Array<string> = loggingIdentity<string>(['abc', 'def', '123'])
console.log(lt)

// 函数接口
interface Haha {
    (a: number, b: number): boolean;
}
const abc: Haha = (x: number, y: number) => x + y >= 0
console.log('abc => ', abc(3, -5))

// 泛型接口
interface GF {
    <T>(a: T): T;
}
function gf<T>(arg: T): T {
    return arg
}
const ttt: GF = gf

interface Lengthwise {
    length: number;
}

function identity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
identity({a: 1, b: 2, length: 2})

// interface K {}
// interface T {}
// function getProperty(obj: T, key: K) {
//     return obj[key];
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a"); // okay
// getProperty(x, "m");

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

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!