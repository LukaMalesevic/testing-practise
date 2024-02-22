import calculator from "./calculator";

test("20 + 7 to equal 27", () => {
    expect(calculator.add(20, 7)).toBe(27);
});

test("30 - 3 to equal 27", () => {
    expect(calculator.subtract(30, 3)).toBe(27);
});

test("81 / 3 to equal 27", () => {
    expect(calculator.divide(81, 3)).toBe(27);
});

test("3 * 9 to equal 27", () => {
    expect(calculator.multiply(3, 9)).toBe(27);
});