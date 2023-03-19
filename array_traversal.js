let nums = [11, 33, 64,31, 88, 52]

for(let i=0; i<nums.length; i++){
    if( nums[i] % 2 ==0){
        console.log(nums[i]);
    }
}
console.log('-------------\n');

let newarr = [];

// for each loop
for(let n of nums){

    if(n%2==0){
        // console.log(n);
        newarr.push(n)
    }


}
console.log(newarr);

//  Filtering in array 

let res = nums.filter( (n)=> { return n%2==0})
console.log(res);

let res2 = nums.map( (a) => {return a*2 });
console.log(res2);

const prices = [ 1200, 350, 3250, 5890, 3990];
let res3 = prices.map( (a) => {return (a-a/10)})
console.log(res3);

//  wap to filter all non-perf. sq. from an array

let arr = [4, 7, 12, 16, 25, 29, 36, 44, 49, 58, 64]

let res = arr.filter((n) => {return(n! = (n**.5)(n**.5))})
console.log(res);



