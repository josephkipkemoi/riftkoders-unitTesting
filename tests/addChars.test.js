const addChars = require("../src/addChars")

test("it takes two strings, concatenates and returns the string", () => {
    expect(addChars("Rift", "Coders")).toBe("Rift Coders")
})