import { describe, expect, it } from "vitest";

import {
  fName,
  lName,
  houseNum,
  street,
  city,
  state,
  zip,
  address,
} from "./variable-practice-2";

describe("strings", () => {
  it("Variable fName should have the data type string", () => {
    expect(typeof fName).toBe("string");
  });

  it("Variable lName should have the data type string", () => {
    expect(typeof lName).toBe("string");
  });

  it("Variable street should have the data type string", () => {
    expect(typeof street).toBe("string");
  });

  it("Variable city should have the data type string", () => {
    expect(typeof city).toBe("string");
  });

  it("Variable state should have the data type string", () => {
    expect(typeof state).toBe("string");
  });

  it("Variable address should have the data type string", () => {
    expect(typeof address).toBe("string");
  });
});

describe("numbers", () => {
    it("Variable houseNum should have the data type number", () => {
        expect(typeof houseNum).toBe("number");
    });

    it("Variable zip should have the data type number", () => {
        expect(typeof zip).toBe("number");
    });
})
