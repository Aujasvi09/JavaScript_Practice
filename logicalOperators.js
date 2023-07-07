// console.log(1>5)
// console.log("01" == 1)
// console.log("01" === 1)
// console.log(null == 0)
// console.log(null > 0)
// console.log(null < 1)
// console.log(null == undefined)
// console.log(null === undefined)
// console.log(0 == false)
// console.log(0 === false)

// const n = 10;
// let string = "";
// for(let i =0; i < n;i++){
//     for(let j = 0 ; j<n;j++){
//         string += "* "
//     }
//     string += "\n"
// }
// console.log(string)

// const s = "hello"
// const p = "eeo"
// console.log(s.indexOf(p))

// let num = 123;
// let ans;
// while (num > 0) {
//     ans = num % 10
//     num = Math.trunc(num / 10) 
// }
// console.log(ans)

let number = 9
if (number % 3 == 0 && number % 5 ==0){
    console.log("FizzBuzz")
}
else if (number % 5 == 0){
    console.log("Buzz")
}
else if (number % 3 == 0){
    console.log("Fizz")
}
else{
    console.log(number)
}
