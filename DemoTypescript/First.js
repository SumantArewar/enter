console.log("Welcome to Typescript");
var firstname = 'Tom';
var age = 33;
console.log("Name =" + firstname);
console.log("Age =" + age);
var fno = 70;
var sno = 80;
var csno = '40';
var result = fno + sno + csno;
var result1 = fno + csno + sno;
var result2 = csno + sno + fno;
console.log(result);
console.log(result1);
console.log(result2);
var fruits = ['Apple', 'Mango', 'Orange'];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
function sayHello() {
    console.log('Hello World');
}
function multiply(a, b) {
    return a * b;
}
sayHello();
console.log(multiply(4, 5));
