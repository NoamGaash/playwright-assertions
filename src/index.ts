import {matchers as arrayMatchers} from "./matchers/arrays";
import { expect as base } from "playwright/test";

export const expect = base.extend({
  ...arrayMatchers,
});
