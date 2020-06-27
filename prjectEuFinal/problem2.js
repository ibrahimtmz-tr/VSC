var sum = 0;
var term1 = 1;
var term2 = 1;

while(term2 < 4000000) {
    term2 = term1 + term2;
    term1 = term2 - term1;
    sum += term2 % 2 === 0 ? term2 : 0 ;
}

console.log(sum);