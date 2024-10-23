function x(){
    console.log("Thi is named fuctui=on")
}

x()

let y = ()=>{
    console.log("This is arrow function")
}

y()


function a(b , c){
    console.log("This is higher order function")
    console.log(b)
    console.log(c)
}

function b(){
    console.log("This si call back function")
}

function c(){
    console.log("Thi sis another call back function")
}

a(b, c)



let products = [25000, 10000, 2000, 1500, 125, 500]

//filter() - it is an Higher order function which means it will accept anoother function
//it will accept only condtitional stetements
let h = products.filter((h)=>{
    return h > 1500
})

console.log(h)

//map - here we can use operator as well
let r = products.map((y)=>{
    return y = y + y * 0.18
})

console.log(r)


let z = products.reduce((acc, val)=>{
    return acc + val
}, 0) // if we do not provide any value then by default it will be 0

console.log(z)


// // reduce
// let checkout = gst.reduce((acc , val)=>{
// return acc+val
// } ,0)

// console.log(checkout);