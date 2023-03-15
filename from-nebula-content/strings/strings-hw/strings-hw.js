// 1. Declare a variable, concatted, and use it to store the value of string1 and string2 added together, with a space in between the two words"
const string1 = "hello";
const string2 = "goodbye";

const concatted = string1.concat(" ",string2);

// 2. Declare a variable, friend, and use it to save the substring "Friend" from the string greeting
const greeting = "Hello Friend";
const friend = greeting.split(" ").splice(-1);

// 3. Declare a variable, myLiteral, and Using 5 or more of the following words, create a template literal that makes a legible sentence and store it in myLiteral
const word1 = "hello";
const word2 = "horror";
const word3 = "peace";
const word4 = "world";
const word5 = "dislike";
const word6 = "umbrella";
const word7 = "car";
const word8 = "pasta";
const word9 = "pizza";
const word10 = "movies";
const word11 = "football";
const word12 = "soccer";
const word13 = "eat";
const word14 = "cookie";
const word15 = "favorite";
const word16 = "makeup";
const word17 = "I";
const word18 = "to";
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like";

const myLiteral = `${word1} ${word17} ${word23} ${word18} ${word13} ${word9}`;

// 4. Declare a variable fullName, and use it to store your full name (first and last name), then declare a second variable, initials, and use it to store your initials from the string stored in fullName.
let fullName = "Amy Posten";
fullName = fullName.split(" ");
const initials = `${fullName[0][0]}${fullName[1][0]}`;

// 5. Declare a variable, fifth, and use it to store the 5th character from the string stored in greeting1. Get the 5th character from the following string: 'Hello World'
const greeting1 = "Hello World";
const fifth = greeting[4];

// 6. Declare a variable, dashIndex, and use it to store the index of the dash from the string stored in coding.
const coding = "Coding-Time!";
const dashIndex = coding.indexOf("-");

// 7. declare a variable, lastLetter, and use it to store the last letter from the string stored in the variable string.
const string = "string";
const lastLetter = string.slice(-1);

// 8. Declare a variable, firstThree, and use it to store the first three letters from the above string.
const firstThree = string.slice(0, 3);

// 9. Declare a variable, sentArray, and use it to store the string in sentence1 split into an array of words.
const sentence1 = "This-is-a-sentence";
const sentArray = sentence1.split("-");

// 10. Declare a variable, twelve, and use it to store the numbers stored in the variable one and two as the string "12";
let one = 1;
let two = 2;

const twelve = one.toString().concat(two);

export {
  string1,
  string2,
  concatted,
  greeting,
  friend,
  myLiteral,
  fullName,
  initials,
  greeting1,
  fifth,
  coding,
  dashIndex,
  string,
  lastLetter,
  sentence1,
  sentArray,
  one,
  two,
  twelve,
};
