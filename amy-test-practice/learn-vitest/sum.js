function sum(numArr=[]) {
  const sumOfArray = numArr.reduce((a, b) => a + b, 0);
  return sumOfArray;
}

export default sum;
