import { describe, expect, it } from "vitest";

import {
  num1,
  a,
  b,
  sum,
  myVar1,
  myVar2,
  myVar3,
  difference,
  even1,
  even2,
  divided,
  odd1,
  odd2,
  multiplied,
  divide3,
  remainder,
} from "./numbers-practice-1";

describe(num1, () => {
  it("should be data type number", () => {
    expect(typeof num1).toBe("number");
  });
});

describe(a, () => {
  it("should be data type number", () => {
    expect(typeof a).toBe("number");
  });
});

describe(b, () => {
  it("should be data type number", () => {
    expect(typeof a).toBe("number");
  });
});

describe(sum, () => {
  it("should be data type number", () => {
    expect(typeof sum).toBe("number");
  });

  it("should be data type number", () => {
    expect(sum).toEqual(a + b);
  });
});

describe(myVar1, () => {
  it("should be data type number", () => {
    expect(typeof myVar1).toBe("number");
  });
});

describe(myVar2, () => {
  it("should be data type number", () => {
    expect(typeof myVar1).toBe("number");
  });
});

describe(myVar3, () => {
  it("should be data type number", () => {
    expect(typeof myVar1).toBe("number");
  });
});

describe(difference, () => {
  it("should be data type number", () => {
    expect(typeof difference).toBe("number");
  });

  it("should be equal to myVar1 - myVar2 - myVar3", () => {
    expect(difference).toEqual(myVar1 - myVar2 - myVar3);
  });
});

describe(even1, () => {
  it("should be data type number", () => {
    expect(typeof even1).toBe("number");
  });

  it("should be an even number", () => {
    expect(even1 % 2).toEqual(0);
  });
});

describe(even2, () => {
  it("should be data type number", () => {
    expect(typeof even2).toBe("number");
  });

  it("should be an even number", () => {
    expect(even2 % 2).toEqual(0);
  });
});

describe(divided, () => {
  it("should be data type number", () => {
    expect(typeof divided).toBe("number");
  });

  it("should be equal to even1 divided by even2", () => {
    expect(divided).toEqual(even1 / even2);
  });
});

describe(odd1, () => {
  it("should be data type number", () => {
    expect(typeof odd1).toBe("number");
  });

  it("should be an odd1 number", () => {
    expect(odd1 % 2).not.toEqual(0);
  });
});

describe(odd2, () => {
  it("should be data type number", () => {
    expect(typeof odd2).toBe("number");
  });

  it("should be an odd number", () => {
    expect(odd2 % 2).not.toEqual(0);
  });
});

describe(multiplied, () => {
  it("should be data type number", () => {
    expect(typeof multiplied).toBe("number");
  });

  it("should be an odd number", () => {
    expect(multiplied).toEqual(odd1 * odd2);
  });
});

describe(divide3, () => {
  it("should be data type number", () => {
    expect(typeof divide3).toBe("number");
  });
});

describe(remainder, () => {
  it("should be data type number", () => {
    expect(typeof remainder).toBe("number");
  });

  it("should be an odd number", () => {
    expect(remainder).toEqual(divide3 % 3);
  });
});
