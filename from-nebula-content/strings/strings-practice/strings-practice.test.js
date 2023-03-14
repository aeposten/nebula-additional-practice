import { describe, expect, it } from "vitest";
import {
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
} from "./strings-practice";

describe("Question 1", () => {
  describe(lowerCase, () => {
    it("Should be the string noCaps in all lower case", () => {
      expect(lowerCase).toStrictEqual(noCaps.toLowerCase());
    });
  });
});

describe("Question 2", () => {
  describe(upperCase, () => {
    it("Should be the string loud in all upper case", () => {
      expect(upperCase).toStrictEqual(loud.toUpperCase());
    });
  });
});

describe("Question 3", () => {
  describe(concatted, () => {
    it("Should be the strings lowerCase and upperCase concatenated", () => {
      expect(concatted).toStrictEqual(lowerCase.concat(upperCase));
    });
  });
});

describe("Question 4", () => {
  describe(arrOfNames, () => {
    it("Should be stringOfNames split into an array", () => {
      expect(arrOfNames).toStrictEqual(stringOfNames.split(" "));
    });
  });
});

describe("Question 5", () => {
  describe(madLibs, () => {
    it("Should have the data type string", () => {
      expect(typeof madLibs).toBe("string");
    });
  });
});

describe("Question 6", () => {
  describe(ironInitials, () => {
    it("Should equal TS", () => {
      expect(ironInitials).toEqual(ironArray[0][0] + ironArray[1][0]);
    });
  });
});

describe("Question 7", () => {
  describe(allStar, () => {
    it("Should equal all-star", () => {
      expect(allStar).toEqual("all-star");
    });
  });
});

describe("Question 8", () => {
  describe(questionMark, () => {
    it("Should equal ?", () => {
      expect(questionMark).toEqual("?");
    });
  });
});

describe("Question 9", () => {
  describe(sum, () => {
    it("Should equal the number 15", () => {
      expect(sum).toStrictEqual(15);
    });
  });
});

describe("Question 10", () => {
    describe(sentArr, () => {
      it("Should be sentence split into an array", () => {
        expect(sentArr).toStrictEqual(sentence.split(" "));
      });
    });
  });