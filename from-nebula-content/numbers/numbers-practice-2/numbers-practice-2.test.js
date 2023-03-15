import { describe, expect, it } from "vitest";

import {
  sqrt,
  power,
  rounded,
  roundedUp,
  absolute,
  minimum,
  maximum,
  randomNum,
  zeroToTen,
} from "./numbers-practice-2";

describe(sqrt, () => {
  it("should equal the square root of 25", () => {
    expect(sqrt).toEqual(Math.sqrt(25));
  });
});

describe(power, () => {
  it("should equal 3 to the 5th power", () => {
    expect(power).toEqual(Math.pow(3, 5));
  });
});

describe(rounded, () => {
  it("should equal 7.4 rounded", () => {
    expect(rounded).toEqual(Math.round(7.4));
  });
});

describe(roundedUp, () => {
    it("should equal 7.4 rounded up", () => {
      expect(roundedUp).toEqual(Math.ceil(7.4));
    });
  });

  describe(absolute, () => {
    it("should equal the absolute value of -13", () => {
      expect(absolute).toEqual(Math.abs(-13));
    });
  });

  describe(minimum, () => {
    it("should equal the minimum value of the following group of numbers: 12, 13, 14, 15, 2, -1", () => {
      expect(minimum).toEqual(Math.min(12, 13, 14, 15, 2, -1));
    });
  });

  describe(maximum, () => {
    it("should equal the maximum value of the following group of numbers: 12, 13, 14, 15, 2, -1", () => {
      expect(maximum).toEqual(Math.max(12, 13, 14, 15, 2, -1));
    });
  });

  describe(randomNum, () => {
    it("Should equal a random number", () => {
      expect(typeof randomNum).toBe("number");
    });
  });

  describe(zeroToTen, () => {
    it("Should be a random number between zero and 10", () => {
      expect(zeroToTen).toBeGreaterThanOrEqual(0);
      expect(zeroToTen).toBeLessThanOrEqual(10);
    });
  });


