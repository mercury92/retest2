let typeSort = () => {
    let n = 0
    let number = []
    while (n !== "") {
        n = prompt("enter number")
        if (n == "true") {
            number = number.sort();
            console.log(n)
            break;
        }
        if (n == "false") {
            console.log(typeof n)
            number = number.reverse();
            break;
        }
    number.push(n)

}
return number
}

console.log(typeSort());


