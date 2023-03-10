import { describe, expect, it } from "vitest";

import {
  favoriteAnimal,
  favoriteCandy,
  candyAmount,
  moreCandy,
  totalCandy,
} from "./variable-practice";

describe("strings", () => {
  it("should be a string data type", () => {
    expect(typeof favoriteAnimal).toBe("string");
  });

  it("should be a string data type", () => {
    expect(typeof favoriteCandy).toBe("string");
  });
});

describe("numbers", () => {
  it("should be a number data type", () => {
    expect(typeof candyAmount).toBe("number");
  });

  it("should be a number data type", () => {
    expect(typeof moreCandy).toBe("number");
  });

  it("should be a number data type", () => {
    expect(typeof totalCandy).toBe("number");
  });

  describe("operations", () => {
    it("totalCandy should be the sum of candyAmount and moreCandy", () => {
      expect(totalCandy).toBe(candyAmount + moreCandy)
    });
  });
});
