let typeSortDeep = () => {
    let n = 0
    let number = []
    while (n !== "") {
        n = prompt("enter number")
        if (n === "true") {
            for (i = 0; i < number.length; i++) {
                for (j = 0; j < number.length; j++) {
                    if (number[j] > number[j + 1]) {
                        minNum = number[j + 1];
                        number[j + 1] = number[j];
                        number[j] = minNum;
                    }
                }
            }
            break;
        }
        if (n === "false") {
            for (i = 0; i < number.length; i++) {
                for (j = 0; j < number.length; j++) {
                    if (number[j] < number[j + 1]) {
                        maxNum = number[j + 1];
                        number[j + 1] = number[j];
                        number[j] = maxNum;
                    }
                    break;
                }
            }
        }
        n = Number(n)
        number.push(n)

    }
    return number
}

console.log(typeSortDeep());


