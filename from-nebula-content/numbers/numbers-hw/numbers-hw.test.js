import { describe, expect, it } from "vitest";

import {
  myVar,
  neg1,
  neg2,
  difference,
  num1,
  num2,
  num3,
  multiplied,
  even1,
  even2,
  divideEven,
  odd1,
  odd2,
  divideOdd,
  minVal,
  maxVal,
  myNum,
  remainder,
  squareRoot,
  threeToSeven,
  rounded,
  roundedDown,
  absVal,
} from "./numbers-hw";

describe("Question 1", () => {
  describe(myVar, () => {
    it("Should have the data type number", () => {
      expect(typeof myVar).toBe("number");
    });
  });
});

describe("Question 2", () => {
  describe(neg1, () => {
    it("should be a negative number", () => {
      expect(neg1).toBeLessThan(0);
    });
  });

  describe(neg2, () => {
    it("should be a negative number", () => {
      expect(neg2).toBeLessThan(0);
    });
  });

  describe(difference, () => {
    it("Should equal neg1 minus neg2", () => {
      expect(difference).toStrictEqual(neg1 - neg2);
    });
  });
});

describe("Question 3", () => {
  describe(multiplied, () => {
    it("Should equal num1 multiplied by num2 multiplied by num3", () => {
      expect(multiplied).toStrictEqual(num1 * num2 * num3);
    });
  });
});

describe("Question 4", () => {
  describe(even1, () => {
    it("Should be an even number", () => {
      expect(even1 % 2).toStrictEqual(0);
    });
  });

  describe(even2, () => {
    it("Should be an even number", () => {
      expect(even2 % 2).toStrictEqual(0);
    });
  });

  describe(divideEven, () => {
    it("Should equal even1 divided by even2", () => {
      expect(divideEven).toStrictEqual(even1 / even2);
    });
  });
});

describe("Question 5", () => {
  describe(odd1, () => {
    it("Should be an odd number", () => {
      expect(odd1 % 2).toStrictEqual(1);
    });
  });

  describe("odd2", () => {
    it("Should be an odd number", () => {
      expect(odd2 % 2).toStrictEqual(1);
    });
  });

  describe(divideOdd, () => {
    it("Should equal even1 divided by even2", () => {
      expect(divideOdd).toEqual(odd1 / odd2);
    });
  });
});

describe("Question 6", () => {
  describe(minVal, () => {
    it("Should return the minimum value in the set of numbers", () => {
      expect(minVal).toStrictEqual(Math.min(10, 20, 30, 40, 50));
    });
  });
});

describe("Question 7", () => {
  describe(maxVal, () => {
    it("Should return the maximum value in the set of numbers", () => {
      expect(maxVal).toStrictEqual(Math.max(-1, -2, -3, -4, -5));
    });
  });
});

describe("Question 8", () => {
  describe(remainder, () => {
    it("Should be equal to the remainder of myNum divided by 2", () => {
      expect(remainder).toStrictEqual(myNum % 2);
    });
  });
});

describe("Question 9", () => {
  describe(squareRoot, () => {
    it("Should be equal to the square root of 144", () => {
      expect(squareRoot).toStrictEqual(Math.sqrt(144));
    });
  });
});

describe("Question 10", () => {
  describe(threeToSeven, () => {
    it("Should equal three to the power of 7", () => {
      expect(threeToSeven).toStrictEqual(Math.pow(3, 7));
    });
  });
});

describe("Question 11", () => {
  describe(rounded, () => {
    it("Should equal 73.2 rounded", () => {
      expect(rounded).toStrictEqual(Math.round(73.2));
    });
  });
});

describe("Question 12", () => {
  describe(roundedDown, () => {
    it("Should equal 9.9 rounded down", () => {
      expect(roundedDown).toStrictEqual(Math.floor(9.9));
    });
  });
});

describe("Question 13", () => {
  describe(absVal, () => {
    it("Should equal the absolute value of -1231", () => {
      expect(absVal).toStrictEqual(Math.abs(-1231));
    });
  });
});
