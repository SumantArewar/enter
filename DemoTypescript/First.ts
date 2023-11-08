console.log("Welcome to Typescript");

var firstname :string ='Tom';
var age:number =33;

console.log("Name ="+firstname);
console.log("Age ="+ age);

var fno:number=70;
var sno:number=80;
var csno:string='40';

var result = fno + sno +csno
var result1 = fno + csno +sno
var result2 = csno + sno + fno
console.log(result)
console.log(result1)
console.log(result2)

var fruits : string[] = ['Apple','Mango','Orange']
for(var i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}
function sayHello():void{
    console.log('Hello World')
}