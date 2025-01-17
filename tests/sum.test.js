const sum = require("../src/sum") 

/* 
    The test function from jest takes two arguements,
    the first arguement is a string of what you expect from your test,
    the second arguement is a calledback function with your test assertions
*/
test("adds 10 + 20 to equal 30", () => {
    expect(sum(10,20)).toBe(30)
})