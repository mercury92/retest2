findDigit = () => {
    let n;
    let num = 1;
    let sum;
    let Sum = 0;
    n = prompt("enter number")
    for (i = 1; i <= n; i++) {
        num = num * i;
    }
    num = num.toString()
    for (i = 0; i < num.length; i++) {
        sum = num.slice(i, i + 1)
        sum = Number(sum)
        Sum = Sum + sum
    }
    return Sum
}

console.log(findDigit())