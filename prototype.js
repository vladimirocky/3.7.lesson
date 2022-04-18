Object.prototype.testFunc = ()=> 'Hello test func' // плохая практика

const someObj = {
    name: 'UserName'
}
// const someObj = new Object({   /// одинаковые записи
//     name: 'UserName'
// })
// const someObj = Object.create({}, {   /// одинаковые записи
//     name: 'UserName'
// })

console.log(someObj)


class Parent {
    constructor(name) {
        this.name = name
    }

    getName(){
        return this.name
    }
}

const ivan = new Parent('Ivan')
console.log(ivan.getName())
console.log(ivan)

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
console.log(child)

const testObj = Object.create(ivan)
testObj.name = 'Sergey'
console.log(testObj.getName())

console.log(Object.prototype)

const obj = {
    a: 4
}

obj.__proto__ = Array.prototype
console.log(obj.map(e=>e))

