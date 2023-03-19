let user = { name : 'raju', email : 'raju@gmail.com', password : '1234567'}

console.log(user.password);
console.log(user['name']);

user.address = "Lucknow"
console.log(user);

user.email = 'raju@hotmail.com';

console.log(user);
  
delete user.password;

console.log(user);


console.log( Object.keys(user));
console.log( Object.values(user));


let smartphone = {
    brand : 'samsung',
    model : 's23 ultra',
    price : 78000,
    color : 'white',
}

console.log( smartphone.color);

smartphone.color = [ 'white', 'red', 'black']

console.log(smartphone.color[1]);

smartphone.color.push('blue')
console.log(smartphone); 

