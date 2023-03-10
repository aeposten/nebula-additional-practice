function sum (numArr) {
   const sumOfArray = numArr.reduce((a, b) => a + b)
   return sumOfArray;
}

const numbers = [2, 4, 6, 8]

console.log(sum(numbers))
export default sum;