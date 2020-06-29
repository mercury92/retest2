sumPrime = () => {
    let n = prompt("enter number")
    let sum=0
     for(i=0;i<=n;i++) {
         for(j=0;j<i;j++){
             sum = sum+i
         }
     }
     return sum
}
console.log(sumPrime())