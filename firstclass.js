school = [
    {studant: 'Milene', grade1: 1, grade2: 9, year: 2023}, 
    {studant: 'André', grade1: 6, grade2: 9, year: 2023}, 
    {studant: 'Leonardo', grade1: 7, grade2: 4, year: 2023}, 
    {studant: 'Mauro', grade1: 1, grade2: 0, year: 2023},
    {studant: 'João', grade1: 10, grade2: 3, year: 2023},
    {studant: 'Larissa', grade1: 8, grade2: 8, year: 2023},
    {studant: 'Simba', grade1: 10, grade2: 10, year: 2023},
    {studant: 'Buzz', grade1: 6, grade2: 9, year: 2023},
    {studant: 'Estevan', grade1: 8, grade2: 9, year: 2023},
    {studant: 'Ferreira', grade1: 5, grade2: 3, year: 2023}
]

for (let i = 0; i < school.length; i++){
    let box = school[i];
    let grade = box['grade1'] + box['grade2'] / 2;
    if (grade > 5){
        console.log(box['studant'] + ' is approved');
    }else{
        console.log(box['studant'] + ' is reproved');
    }
}