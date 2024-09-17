import { describe, it, expect } from "vitest";
import { filterArray } from "../filter-array";

interface MockItem {
  name: string;
  age: number;
  email: string;
}

describe("filter-array", () => {
  const items: MockItem[] = [
    { name: "Andrew", age: 35, email: "andrew72@example.com" },
    { name: "Alice", age: 38, email: "alice.smith@onet.com" },
    { name: "John", age: 42, email: "john82@gmail.com" },
  ];

  it("should return all items if filters are not defined", () => {
    expect(filterArray(items, {})).toEqual(items);
  });

  it("should return an empty array when no items match the filters", () => {
    expect(filterArray(items, { name: "Peter", age: 87 })).toEqual([]);
  });

  it("should filter items by one filter", () => {
    expect(filterArray(items, { age: 3 })).toEqual([
      { name: "Andrew", age: 35, email: "andrew72@example.com" },
      { name: "Alice", age: 38, email: "alice.smith@onet.com" },
    ]);
  });

  it("should return items based on partial filters", () => {
    expect(filterArray(items, { email: "a" })).toEqual([
      { name: "Andrew", age: 35, email: "andrew72@example.com" },
      { name: "Alice", age: 38, email: "alice.smith@onet.com" },
    ]);
  });

  it("should not be case sensitive", () => {
    expect(filterArray(items, { name: "jOhN" })).toEqual([
      { name: "John", age: 42, email: "john82@gmail.com" },
    ]);
  });
});
