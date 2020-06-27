var x = 0;
var y = 1;

while (hesap(x).lenght <= 500) {
    x += y;
    y++
}

console.log(x);

function hesap (n) {
    let arr, i , z;
    
    arr =  [];
    i = 1;
    z = n;

    while  (i < z) {
        if (n % i === 0) {
            arr.push(i);

            let k = n / i;
            if (i !== k) {
                arr.push(k);
            }
            z = k;
        } 
        i++;
    }  
    return arr.sort ((a , b ) => a - b) 
}
