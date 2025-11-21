import { ExpectMatcherState, MatcherReturnType } from "playwright/test";

export type Matchers =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Record<string, (this: ExpectMatcherState, receiver: any, ...args: any[])
    => MatcherReturnType | Promise<MatcherReturnType>>