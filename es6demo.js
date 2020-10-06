/*array destructuring*/
/*
var num = [5,2,3,4]
let [a,b, ...c] = num
console.log(a,b,c)
let x,y
function arrayNum() {
    return [x= 1, y= 2]
}
[x=3, y=4] = arrayNum()
console.log(x,y)
*/

/*object destructuring*/
/*
let person = { fname: "Suraj", lname: "Lokhande", city:"pune" }

let { fname: fn, lname: ln, city } = person //undefined "Lokhande" "pune"
console.log(fn, ln, city)
*/

/* templte literals */
/*
let temp = `
    sgcackjvl.kvre
    sdjvkhvk.ahvkav\
    vwlvwv/v
    wrgvwruhkhv
`
console.log(temp)

let name = "suraj lokhande"
console.log(`name is: ${name}`)
*/

/* function calling */
/*
let someFunc = Function()
someFunc()

let secoundFunc = function(a) {
    console.log("single parametter", a)
}
secoundFunc(5)

let thirdFunc = x => console.log("single parameter", x)
thirdFunc(10)
*/

/* Promise */
/*var flag = false
//create Promises
let myNewPromise = new Promise((resolve, reject) => {
    if (flag) {
        resolve("I did Somthing")
    }else{
        reject("somthing did wrong")
    }
})

//consume promises
myNewPromise
.then((result)=> console.log(result))
.catch((error) => console.log(error))  */           


// fake API calling       
/*async function myAgainPromises() {
    let response = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    let dataRespo = await response.json()
    return dataRespo
}

let data = myAgainPromises()
console.log(data.then((response)=>(console.log(response))))

// //handling multiple promises
let p1 = new Promise((resolve)=> resolve("promise 1"))
let p2 = new Promise((resolve,reject)=> reject("promise 2 rejected"))
let p3 = new Promise((resolve)=> resolve("promise 3"))
Promise.all([p1,p2,p3])
.then((result)=>console.log(result))
.catch((err)=>console.log(err))*/

/* class & getter and setter */
/*class Employee{
    constructor(name){
        this.fullname = name
    }
    set changeName(name){
        this.fullname = name
    }
    get changeName() { 
        return this.fullname
    }
}

let emp = new Employee("Suraj")
console.log(emp.fullname);
emp.changeName = "Dhiraj"
console.log(emp.changeName);*/







