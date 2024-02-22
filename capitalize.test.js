import capitalize from "./capitalize";

test("turn hello into Hello", () => {
    expect(capitalize('hello')).toBe('Hello');
});