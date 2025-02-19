//TODO 1-chisi
// function calc(m){
//     return function(n){
//         let sum = 0;
//         for (let i = 1; i <= n; i++) {
//             sum += i ** m;
//         }
//         return sum
//     }
// }

//TODO 2-chisi
// function sumPrime(m){
//     return function(n){
//         let sum = 0;
//         for (let i = n; i <= m; i++) {
//             if (isPrime(i)) {
//                 sum += i;
//             }
//         }
//         return sum
//     }
// }

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

//TODO 3-chisi
// function isEqual(str1) {
//   return function (str2) {
//     let count = 0;
//     const charSet = new Set(str2);

//     for (let char of str1) {
//       if (charSet.has(char)) {
//         count++;
//       }
//     }

//     return count === str1.length;
//   };
// }

//TODO 4-chisi
// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10));

//TODO 5-chisi
// function closestNumberFinder(n) {
//     return function(m) {
//         let closest = n[0];
//         for (let i = 1; i < n.length; i++) {
//             if (Math.abs(n[i] - m) < Math.abs(closest - m)) {
//                 closest = n[i];
//             }
//         }
//         return closest;
//     };
// }

// const findClosest = closestNumberFinder([3, 8, 15, 22, 30]);
// console.log(findClosest(10));

//TODO bonus1
// function repeatNumber(num, length) {
//     let result = [];
//     for (let i = 0; i < length; i++) {
//         result += num
//     }
//     return result;
// }

//TODO bonus2
function reverseString(str){
    return str.split(" ").reverse().join(" ");
}

//TODO bonus3
// function stolen(obj){
//     let sum = 0
//     for(let key in obj){
//         sum += obj[key]
//     }
//     if(sum === 0){
//         return "Lucky you"
//     } else return sum
// }

//TODO bonus4
function removeABC(str) {
    if (!str.includes("a") && !str.includes("b") && !str.includes("c")) {
        return null;
    }

    return str.replaceAll("a", "").replaceAll("b", "").replaceAll("c", "");
}

//TODO bonus5
// function cap1st(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
//     return arr;
// }




