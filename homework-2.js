function test(testName, expected, result){
    testCase = `Test Case: ${testName}`;
    console.log(testCase);
    if (result == expected){
        console.log("Success!");
        return;
    }
    throw new Error(`Expected: ${expected} Result: ${result} `);
}

//Write a function that takes an array of numbers as input and returns the average of those numbers
function mediaNumbers(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum / numbers.length;
}

// Tests 1
test("the average of those numbers should be 3", 3, mediaNumbers([3,3,3]));

//Write a function that takes an array of strings as input and returns the longest string in the array.
function longestString(a){
    let b = "";
    for(let i = 0; i < a.length; i++){
        if(a[i].length > b.length){
        b = a[i];
        }
    }

    return b;
}

// Tests 2
test("essa é a maior string", 'essa é a maior', longestString(['oi', 'ola', 'essa é a maior', 'n']));

// Write a function that takes an array of numbers as input and returns the sum of all the even numbers in the array.
function evenNumbers(numbers){
    let x = 0;
    for(let i = 0; i <= numbers.length; i++){
        if(numbers[i] % 2 == 0){
            x += numbers[i];
        }
    }

    return x;
}

// Tests 3
test("the sum of even numbers are 22", 22, evenNumbers([10, 12]));

// Write a function that takes an array of strings as input and returns a new array containing only the strings that start with the letter 'a'.
function fullName(names){
    let nameA = [];
    for(let i = 0; i < names.length; i++){
        if(names[i][0] == 'A'){
            nameA.push(names[i]);
        }
    }

    return nameA;
}

// Tests 4
test("the names that starts with 'A' is Ana, André and Aurora", 'Ana,André,Aurora', fullName(["Ana", "André", "Aurora"]).toString());

// Write a function that takes a number as input and returns the factorial of that number.
function fatorial(num){
    let varNum = 1;
    for(let x = 1; x <= num; x++){
        varNum *= x;
    }

    return varNum;
}

//Tests 5
test("the fatorial of 5 is 120", 120, fatorial(5));
test("the fatorial of 3 is 6", 6, fatorial(3));