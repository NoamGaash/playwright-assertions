import { test } from "@playwright/test";
import { expect } from "../src";

test.describe("Array matchers", () => {
  test.describe("toHaveDuplications", () => {
    test("should detect duplications in array", async () => {
      expect([1, 2, 2, 3]).toHaveDuplications();
    });
    test("should detect no duplications in array", async () => {
      expect([1, 2, 3]).not.toHaveDuplications();
    });
    test("should fail when array has no duplications", async () => {
      expect(() => {
        expect([1, 2, 3]).toHaveDuplications();
      }).toThrow("Expected duplications, but none were found.");
    });
    test("should fail when array has duplications but expected not to", async () => {
      expect(() => {
        expect([1, 2, 2, 3]).not.toHaveDuplications();
      }).toThrow("Expected no duplications, but found 1 duplications: [2]");
    });
  });
});
