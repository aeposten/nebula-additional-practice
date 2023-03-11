import { describe, expect, it } from "vitest";
import {
  firstName,
  myNum,
  myBoo,
  carName,
  num,
  num1,
  num2,
  num3,
} from "./variable-practice-1";

describe("firstName", () => {
  it("should have the data type string", () => {
    expect(typeof firstName).toBe("string");
  });
});

describe("myNum", () => {
  it("should have the data type number", () => {
    expect(typeof myNum).toBe("number");
  });
});

describe("num", () => {
  it("should have the data type boolean", () => {
    expect(typeof myBoo).toBe("boolean");
  });
});

describe("carName", () => {
  it("should be equal to the string 'Volvo'", () => {
    expect(carName).toBe("Volvo");
  });
});

describe("num", () => {
  it("should be equal to the number 50", () => {
    expect(num).toBe(50);
  });
});

describe("num1", () => {
  it("should have the data type number", () => {
    expect(typeof num1).toBe("number");
  });
});

describe("num2", () => {
  it("should have the data type number", () => {
    expect(typeof num2).toBe("number");
  });
});

describe("num3", () => {
  it("should have the data type number", () => {
    expect(typeof num3).toBe("number");
  });

  it("should be the sum of num1 and num2", () => {
    expect(num3).toBe(num1 + num2);
  });
});
