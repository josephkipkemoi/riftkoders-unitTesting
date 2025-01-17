const biggestNumber = (arr) => {
    // Create variable that will store our base number, this will be used to check
    // against the numbers in the array, we initialize the variable to 0
   let largestNum = 0

    // Loop through the array in order to query the size of integers     
   for(i = 0; i < arr.length; i++) {
    // Check current array integer size in comparison with our base number
    if(arr[i] > largestNum) {
        // If it is greater than our largestNum integer, we put the value of the integer as our base value
        // and the loop goes on till the last digit in the array
        largestNum = arr[i]
    }
   }
    // return the largestNum which is the biggest value in the array of integers    
    return largestNum
}

module.exports = biggestNumber