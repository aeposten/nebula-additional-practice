import { describe, expect, it } from "vitest";
import {
  name,
  age,
  species,
  lifeSpan,
  isActive,
  color,
  cost,
  type,
  make,
  mileage,
  bodyColor,
  isRunning,
} from "./variable-hw";

describe("strings", () => {
  it("The variable name should have the data type string", () => {
    expect(typeof name).toBe("string");
  });

  it("The variable species should have the data type string", () => {
    expect(typeof species).toBe("string");
  });

  it("The variable color should have the data type string", () => {
    expect(typeof color).toBe("string");
  });

  it("The variable type should have the data type string", () => {
    expect(typeof type).toBe("string");
  });

  it("The variable make should have the data type string", () => {
    expect(typeof make).toBe("string");
  });

  it("The variable bodyColor should have the data type string", () => {
    expect(typeof bodyColor).toBe("string");
  });
});

describe("numbers", () => {
  it("The variable age should have the data type number", () => {
    expect(typeof age).toBe("number");
  });

  it("the variable lifeSpan should have the data type number", () => {
    expect(typeof lifeSpan).toBe("number");
  });

  it("the variable cost should have the data type number", () => {
    expect(typeof cost).toBe("number");
  });

  it("The variable milage should have the data type number", () => {
    expect(typeof mileage).toBe("number");
  });
});

describe("booleans", () => {
  it("The variable isActive should be the data type boolean", () => {
    expect(typeof isActive).toBe("boolean");
  });

  it("The variable isRunning should be the data type boolean", () => {
    expect(typeof isRunning).toBe("boolean");
  });
});
