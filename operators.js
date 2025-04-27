// directly execute in VS Terminal with 'node operators.js' command.
let x=20,y=10;
//==============Arithmatic operators: +   -   *   /   %   **   ++   --
console.log(x+y);//30
console.log(x-y);//10
console.log(x*y);//200
console.log(x/y);//2
console.log(x%y);//0
console.log(5**2);//25
console.log(y**2);//100

// x=x+1  this we can do with ++
// x=x-1  this we can do with --

console.log(x++);//20 //Post increment
console.log(x);//21
console.log(++x);//22 //Pre increment
console.log(x);//22

console.log(x--);//22 //Post decrement
console.log(x);//21
console.log(--x);//20 //Pre decrement
console.log(x);//20


console.log("============================================");
//=============Assignment Operators:  =   +=   -=   *=   /=   %=  
x=100;
y=50;

console.log(x+=y);//150   same as x= x + y
console.log(x-=y);//100  same as x= x - y
console.log(x*=y);//5000   same as x= x * y
console.log(x/=y);//100   same as x= x / y
console.log(x%=y);//0   same as x= x % y


//=========Relational/Comparison operators:  <   >   <=   >=   !=
//Always returns boolean value true/false
console.log("============================================");
x=30,y=67;
console.log(x<y);//true
console.log(x>y);//false
console.log(x<=y);//true
console.log(x>=y);//false
console.log(x!=y);//true
console.log(x==y);//false
console.log(x===y);//false

//=========Ternary operator:       ?

console.log(x<y?x:y);// x //30 //smallest
console.log(x>y?x:y);// x //67 //largest

console.log("============================================");
//=========Logical Operators:  &&   ||   !
let a=true, b=false;

console.log(a && b);//false
console.log(a || b);//true
console.log(!a);//false
console.log(!b);//true