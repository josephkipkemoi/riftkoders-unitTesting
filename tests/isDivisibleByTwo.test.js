const isDivisibleByTwo = require("../src/isDivisibleByTwo")

test("it takes an integer and checks if its divisible by two", () => {
    expect(isDivisibleByTwo(4)).toBe(true)
    expect(isDivisibleByTwo(3)).toBe(false)
    expect(isDivisibleByTwo(1008)).toBe(true)
    expect(isDivisibleByTwo(117)).toBe(false)
})