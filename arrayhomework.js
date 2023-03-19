console.log('₹3400');
console.log( parseInt('₹3400'.slice(1)));

let prices = ['₹3400', '₹845 ', '₹20', '₹940', '₹3700' ];

let newprices = prices.map((p) => { return parseInt(p.slice(1))})
console.log(newprices);


let num = [ 2, 3, 4, 11, 15, 16, 24, 64 ]


let perfacts = num.filter( (n) => { return n**0.5 !== parseInt(n**0.5) } );

console.log(perfacts);

const eleRem = (arr, i) => {
    arr.splice(i, 1);
    return arr;
}

let res = eleRem(num, 3);
console.log(res);
