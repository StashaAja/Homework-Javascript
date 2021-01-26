let arrayOfStrings = ["Ljubov", "Denes e ubav den!", "Srekja", "Aja", "Snegulka", "Denes e sonchev den!"];

function stringLarger(array) {
    for (a of array) {
        let result = (`This string:${a} has more than 10 characters`)
        let b = a.toString().length
        if (b > 10) {
            return result;
        }

    }

}

stringLarger(arrayOfStrings);
console.log(stringLarger(arrayOfStrings));





