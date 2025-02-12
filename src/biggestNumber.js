const biggestNumber = (arr) => {
    // Set the first digit in the array as our initial biggest number, this will be used to check
    // against the subsequent numbers in the array
   let largestNum = arr[0]

    // Loop through the array in order to query the size of integers     
   for(i = 0; i < arr.length; i++) {
    // Check current array integer size in comparison with our largestNumber initiliazer
    if(arr[i] > largestNum) {
        // If it is greater than our largestNum integer, we put the value of the integer as our largestNumber
        // and the loop goes on till the last digit in the array
        largestNum = arr[i]
    }
   }
    // return the largestNum which is the biggest value in the array of integers    
    return largestNum
}

module.exports = biggestNumber