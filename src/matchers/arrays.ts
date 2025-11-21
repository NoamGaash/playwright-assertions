import { Matchers } from "../types";

export const matchers: Matchers = {
  toHaveDuplications(received: Array<unknown>) {
    const dups = received.toSorted().filter((item, index, arr) => item === arr[index - 1]);
    const uniqueDups = [...new Set(dups)];
    const pass = (uniqueDups.length === 0) === this.isNot;
    const expectation = this.isNot ? "Expected no duplications" : "Expected duplications";
    const reality = this.isNot
      ? `but found duplications: ${uniqueDups.join(", ")}`
      : "but none were found.";
    const message = () => `${expectation}, ${pass ? "and" : "but"} ${reality}`;
    return { pass, message, expected: [], actual: uniqueDups };
  },
};
