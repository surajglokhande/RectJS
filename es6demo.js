/*array destructuring*/

var num = [5,2,3,4]
let [a,b, ...c] = num
console.log(a,b,c)
let x,y
function arrayNum() {
    return [x= 1, y= 2]
}
[x=3, y=4] = arrayNum()
console.log(x,y)

/*object destructuring*/
let person = { fname: "Suraj", lname: "Lokhande", city:"pune" }

let { fname: fn, lname: ln, city } = person //undefined "Lokhande" "pune"
console.log(fn, ln, city)

/* templte literals */
let temp = `
    sgcackjvl.kvre
    sdjvkhvk.ahvkav\
    vwlvwv/v
    wrgvwruhkhv
`
console.log(temp)

let name = "suraj lokhande"
console.log(`name is: ${name}`)


/* function calling */

let someFunc = Function()
someFunc()

let secoundFunc = function(a) {
    console.log("single parametter", a)
}
secoundFunc(5)

let thirdFunc = x => console.log("single parameter", x)
thirdFunc(10)

