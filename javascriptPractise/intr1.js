var str = "this is arun"
function fun1(str){
    console.log("This is function 1")
    var arr = str.split(" ")
    console.log(arr)
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}    
fun1(str)

// function fun2(str){
//     console.log("This is function 2")
//     for(var i =0; i < str.length; i++){
//         if(str[i] == " "){
//             console.log(str[i])
//         }
//     }
// }

// fun2(str)

//RestParameter->function functionName(...Parameter) - this will return an array
function func2(...a){
    console.log(a);
}
func2(1,2,3,4,5,6,7,8,9)

function func3(a, ...b){
    console.log(a, b) // if this is (a+b) then output will be 12,3,4,5,6,7
}

// function func4(q, ...b, c){
   //This will be wrong syntax -> if we are using rest parameter then it should be the last parameter
// }
    
func3(1,2,3,4,5,6,7)


//Array destructuring

var vehicle = ['Maruthi Suzuki', 'Creta', 'KIA', 'NANO']
console.log(vehicle)
var [firstCar, secondCar] = vehicle
console.log([firstCar, secondCar])




