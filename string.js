 // que 1:- Reverse a string without using built-in reverse() method.
// Input: "ankur" ➜ Output: "rukna"

function palindrom(str) {
    let input2 = ""
    for (let i = str.length - 1; i >= 0; i--) {
        input2 += str[i]
    }
    if (input2 === str) {
        return "is palindrom"
    } else {
        return "not palindrom"
    }
}
//console.log(palindrom("madam"))

//__________________________________________________________________________________________________________

//que 2:- Find the first non-repeating character in a string.
 //Input: "angular" ➜ Output: "n"


function firstNonRepeatingChar(str) {

    for (let i = 0; i <= str.length; i++) {
        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            return str[i]
        }
    }
}
// console.log(firstNonRepeatingChar("angular"))

function firstNonRepeatingChar1(str) {
const count = {};
    for (let char of str ) {
         count[char] = (count[char] || 0 ) + 1
    }
     for (let char of str) {
    if (count[char] === 1) return char;
  }
}
// console.log(firstNonRepeatingChar1("angular")); 

//const str = "apple"

function repeatechar(str){
   const result = {}

   for(let char of str){
    if(result[char]){
        result[char] += 1
    }else{
         result[char] = 1
    }
}
// console.log(result)
}
// console.log(repeatechar("apple"))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// que str = "waiting for changes before restart"
//     output = "restart before change for waiting"
// reverse the sentance


function reverseSentance(str){
    let words = str.split(" ")
let result = ""

return str.split(" ").reverse().join(" ")

for(let i = words.length-1; i >=0 ; i--){
    result += words[i] + " "
}
return result

}

//console.log(reverseSentance("waiting for changes before restart"))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Que Find the type of arrey ?
// input = [1,2,3]

let arr = [1,2,3]
// this is the right way to check the type of arrey
// console.log(Array.isArray(arr))// if output is getting "true" that is called it is arrey 


// __________________+++++++++++++++++++++++++++++++____________________________

// first non-repeating element

const arry = [1,2,2,3,3,4,5]
let rep_result = {}

for(let x of arry){
    if(rep_result[x]){
        rep_result[x] +=1
    }else{
        rep_result[x] = 1
    }
}
    for(let x of arry){
if(rep_result[x]===1){
console.log(x)
break
} 
    }
console.log(rep_result)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// que second largest number

const arrr = [10,5,20,8]
let max = -Infinity
let second = -Infinity

for(let n of arrr){
    if(n>max){
        second = max;
        max = n;
    }else if(n>second && n!= max){
        second = n;
    }
}

console.log(second)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// que find the binary number

const binary = [2,30,44,5,7,22,9]

let binaryOutput = binary.map((x)=>{
    return x.toString(5)
})

console.log(binaryOutput)