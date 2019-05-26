class Father {
    protected name: String;
    constructor(name: String) {
        console.log('Father constructor')
        this.name = name;
    }
    say(word: String): void {
        console.log(this.name + "'s Father Say: " + word);
    }
}

class Son extends Father {
    protected age: number;
    constructor(name: String, age: number) {
        console.log('Son constructor')
        super(name)
        this.age = age;
    }
    say(word: String) {
        super.say(word);
        const str = `Son name is ${this.name}, and he is ${this.age} years old!`;
        console.log(str)
    }

}

export default Son