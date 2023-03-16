// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]

function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
  return array;
}

// console.log(addOne([1, 2, 3]))

// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// Example string = "happy birthday", letter = "a", should return true
// Example string = "happy birthday", letter = "q" should return false

function strContainsLetter(string, letter) {
  let containsLetter = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      containsLetter = true;
      break;
    }
  }
  return containsLetter;
}

// console.log(strContainsLetter("happy birthday", "q"))

// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]

function returnFirstNames(array) {
  const firstNames = [];
  for (let i = 0; i < array.length; i++) {
    const name = array[i].split(" ");
    firstNames.push(name[0]);
  }
  return firstNames;
}

// console.log(returnFirstNames(["Tom Smith", "Bob Jones", "Bill Williams"]))

// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"

function greetPerson(name, greeting) {
  return `${greeting} ${name}`;
}

// console.log(greetPerson("John Boy", "Goodnight"));

// 5. Write a function that takes in the year someone was born and returns their age.
// Example: birth year: 2000 returns 23

function findAge(birthYear) {
  return 2023 - birthYear;
}

// console.log(findAge(1985));
