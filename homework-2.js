function test(testName, expected, result){
    testCase = `Test Case: ${testName}`;
    console.log(testCase);
    if (result == expected){
        console.log("Success!");
        return;
    }
    throw new Error(`Expected: ${expected} Result: ${result} `);
}
// Write a function that takes an array of numbers as input and returns the average of those numbers

function mediaNumbers(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum / numbers.length;
}
// Tests
// Test cases sum
test("the average of those numbers should be 3", 3, mediaNumbers([3,3,3]));
