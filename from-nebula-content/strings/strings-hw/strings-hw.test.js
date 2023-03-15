import { describe, it, expect } from "vitest";

import {
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
} from "./strings-hw";

describe("Question 1", () => {
  describe(concatted, () => {
    it("Should equal string 1 and string2 added together", () => {
      expect(concatted).toEqual(string1.concat(" ", string2));
    });
  });
});

describe("Question 2", () => {
  describe(friend, () => {
    it("Should equal the string Friend", () => {
      expect(friend).toEqual(greeting.split(" ").splice(-1));
    });
  });
});

describe("Question 3", () => {
  describe(myLiteral, () => {
    it("Should be data type string", () => {
      expect(typeof myLiteral).toBe("string");
    });
  });
});

describe("Question 4", () => {
  describe(initials, () => {
    describe(initials, () => {
      it("Should be data type string", () => {
        expect(typeof initials).toBe("string");
      });
      it("Should equal the first letter of each word in the string fullName", () => {
        expect(initials).toEqual(`${fullName[0][0]}${fullName[1][0]}`);
      });
    });
  });
});
