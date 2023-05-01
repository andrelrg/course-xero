let grade1 = 5;
let grade2 = 10;
let minimum = 7;

printClass(grade1, minimum);
printClass(grade2, minimum);

function printClass(grade, minimum){
    if (grade > minimum){
        console.log('Approved');
    }else{
        console.log('Reproved');
    }
}