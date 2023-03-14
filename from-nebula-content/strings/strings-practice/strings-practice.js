// 1. Declare a variable, lowerCase, use it to store the string stored in noCaps converted to lower case
const noCaps = "This Should Not Have Capital Letters!";
const lowerCase = noCaps.toLowerCase();

// 2. Declare a variable, upperCase, use it to store the string stored in loud converted to all caps
const loud = "i'm very loud!";
const upperCase = loud.toUpperCase();

// 3. Declare a variable, concatted, use it to store the variables lowerCase and upperCase concatenated together
const concatted = lowerCase.concat(upperCase);

// 4. Declare a variable, arrOfNames, and use it to store the string stored in stringOfNames, split into an array.
const stringOfNames = "Ally Becca Carlos Drake Edgar Felicity Greta Hector";
const arrOfNames = stringOfNames.split(" ");

// 5. Make your own mad-libs using a template literal. Store ther template literal in a variable called madLibs.
const myName = "Amy";
const myVerb = "likes";
const myAnimal = "cats";

const madLibs = `${myName} ${myVerb} ${myAnimal}.`;

// 6. Declare a variable, ironInitials, and use it to store the initials of the name store in the array ironMan
const ironMan = "Tony Stark";
const ironArray = ironMan.split(" ");
const ironInitials = ironArray[0][0] + ironArray[1][0];

// 7. Given the string stored in the variable string, extract the word all-star, and store it in a variable called allStar.
const string = "Hey now, you're an all-star!";
const split = string.split(" ");
const allStar = split[split.length - 1].slice(0, -1);
console.log(allStar);

// 8. Using the string stored in the variable string1, extract the question mark and store it in a variable called questionMark.
const string1 = "How are you?";
const questionMark = string1[string1.length - 1];

// 9. Given the following strings, ten and five, create a new variable sum and use it to store the number values of the variables stored in ten and five added together
const ten = "10";
const five = "5";
const sum = parseInt(ten) + parseInt(five);

// 10. Declare a variable, sentArr, and use it to store the string stored in the variable sentence split into an array of words

const sentence = "Welcome to the jungle!";
const sentArr = sentence.split(" ");

export {
  noCaps,
  lowerCase,
  loud,
  upperCase,
  concatted,
  stringOfNames,
  arrOfNames,
  madLibs,
  ironInitials,
  ironArray,
  allStar,
  questionMark,
  sum,
  sentence,
  sentArr,
};
