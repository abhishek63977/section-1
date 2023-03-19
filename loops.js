for( let i=0; i<10; i++){
    console.log(i);
}
// wap to print all numbers either divisible by 7 or 13 from 1 to 100

// and -&&
// or - ||
// not -!

for(let i=1; i<=100; i++){
    if(i%7==0 || i%13==0){
        console.log(i);

    }
}
console.log('--------fibbonacci series----------\n');

let [a, b] = [0, 1];
console.log(a);
console.log(b);

for(let i=0; i<10; i++){
    let c = a+b;
    console.log(c);
    [a, b] = [b, c];
}

// wap to find factorial of a number
console.log('--------fact series----------\n');
let num;
let fact =1;

for(let i=1; i<=num; i++){
    // console.log(fact);
    
    fact=fact*i;
    // console.log('factoril=', Number, fact);
}
console.log(f);

console.log('--------prime number----------\n');

let mynum = 7;
let prime = true;

for(let i=2;  i<mynum; i++){
 if(mynum % i == 0){
    prime = false;
    console.log('not prime');
    break;
 }
}

if(prime) console.log('prime');



// wAP to reverse a number


console.log('--------reverse number----------\n');

let n1 = 37654;
  let reverse = 0;


