let fixedArray = [{ fullName: "Asja Zabijakin", jobTitle: "writer", salary: 3500 }, { fullName: "Jan Ahrimenko", jobTitle: "dancer", salary: 4000 }];

function getSalariesFromPeople(array) {
    let sumOfSalaries = 0;
    for (a of array) {
        // console.log(a); //object
        //  console.log(a.salary);
        //  console.log(typeof(a.salary));//number

        sumOfSalaries += a.salary;
    }
    return sumOfSalaries;
}

console.log(`This is the sum of the salaries: ${getSalariesFromPeople(fixedArray)}`);
