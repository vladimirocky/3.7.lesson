class Parent {
    constructor(name) {
        this.name = name
    }
    getName(){
        return this.name
    }
}

const ivan = new Parent('Ivan')

class Child extends Parent{
    constructor(name, age) {
        super(name);
        this.age = age
    }
    getAge(){
        return this.age
    }
}
const child = new Child('Jack',16)

// теперь ivan будет прототипом для parent
const parent = Object.create(ivan)

console.log(parent);
//Parent {}

Object.setPrototypeOf(parent, child)

console.log(Object.getPrototypeOf(parent));
// Parent { name: 'Ivan' }
// Сhild { name: 'Jack', age: 16 } -- если раскоментировать 29ую строку
