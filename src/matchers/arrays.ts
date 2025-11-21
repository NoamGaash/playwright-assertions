import { Matchers } from "../types";

export const matchers: Matchers = {
  toHaveDuplications(received: Array<unknown>) {
    const dups = received.toSorted().filter((item, index, arr) => item === arr[index - 1]);
    const uniqueDups = [...new Set(dups)];
    const pass = uniqueDups.length > 0;
    const expectation = this.isNot ? "Expected no duplications" : "Expected duplications";
    const reality = this.isNot
      ? `found ${uniqueDups.length} duplications: [${uniqueDups.join(", ")}]`
      : "none were found.";
    const message = () => `${expectation}, ${this.isNot !== pass ? "and" : "but"} ${reality}`;
    return { pass, message, expected: [], actual: uniqueDups };
  },
};
