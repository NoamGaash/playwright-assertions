import { test } from "@playwright/test";
import { expect } from "../src";
import { describe } from "node:test";

test.describe("types", () => {
  describe("valid", () => {
    test("toHaveDuplications", async () => {
      expect([1, 2, 2, 3]).toHaveDuplications();
    });
  });
  
  describe("invalid", () => {
    // @ts-expect-error - invalid receiver type
    expect("sdfsfsd").toHaveDuplication();
    // @ts-expect-error - invalid matcher
    void expect("sdfsfsd").thisAssertionDoesNotExist;
    // @ts-expect-error - invalid argument type
    expect([1, 2, 3]).toHaveDuplications(123);
  });
}); 
