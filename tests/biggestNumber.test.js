const biggestNumber = require("../src/biggestNumber")

test("it takes an array of integers and returns the largest of the numbers", () => {
    expect(biggestNumber([1,3,4])).toBe(4)
    expect(biggestNumber([456,987,222])).toBe(987)
    expect(biggestNumber([0,-34,90,899])).toBe(899)
})