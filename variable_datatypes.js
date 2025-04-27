//VARIABLES
//We have 3 types of variables
//var , const , let

//Multiple line
var x; //declaration
x=10; //initilization
console.log(y);//var is function-scoped //undefined
var y=20; //declaration + initilization
console.log(y);

var a=5,b=7; // single statement multiple variable 

// document.write(x);
// console.log(y);

let c;
c="welcome";
console.log(c);
//console.log(d);// Error - let is blocked-scoped
let d="welcome2";
console.log(d);


const e=300;
console.log(e);
/*e=500;
console.log(e);

//error -- e is const variable value is fixed, can not be changed.
*/


//DATA TYPES
//Javascript is dynamically typed languange
//Here no need to specify datatype explicitly

var id=101.5;
console.log(typeof(id));//number

var name="john";
console.log(typeof(name));//string

let flag= true;
console.log(typeof(flag));

let color=null;
console.log(typeof(color));//object

let val;
console.log(typeof(val));//undefined
let val2=undefined;
console.log(typeof(val2));//undefined