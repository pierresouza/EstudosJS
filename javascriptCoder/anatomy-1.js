// function declaration

function sayHello(){
    console.log('hello!')
}

sayHello()

function sayHelloTo(name){
    console.log(`Hello ${name}!`)
}

sayHelloTo('Pierre')

function returnHi(){
    return 'Hi'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}`
}

console.log(returnHiTo('John'))