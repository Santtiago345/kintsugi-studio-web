import { describe, expect, it } from "vitest";

import { formatCOP } from "./format";

describe("formatCOP", () => {
  it("formats thousands with a dot separator", () => {
    expect(formatCOP(684000)).toBe("$684.000");
  });

  it("formats small values without separators", () => {
    expect(formatCOP(45000)).toBe("$45.000");
  });
});
