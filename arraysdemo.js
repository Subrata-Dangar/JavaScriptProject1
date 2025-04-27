let cars =["volvo", "saab","BMW"]
//let cars=new Array("volvo", "saab","BMW")//another way to declare array
console.log(cars)
console.log(cars[2])//accessing array element

//chamge elements
cars[0]="Opel"
console.log(cars)

//arrays can have different types of data in same array
let myarray=[100,"welcome",10.5,true]
console.log(myarray)

let person1=
{
    name: "John",
    age:30
}
let person2=
{
    name: "Miller",
    age:40
}
let myarray2=[person1,person2]//we can have objects within the JS array
console.log(myarray2)//[ { name: 'John', age: 30 }, { name: 'Miller', age: 40 } ]
console.log(myarray2[0])//{ name: 'John', age: 30 }
console.log(myarray2[0].name)//accesing properties of objects with the array

let fruits = ["Banana","Orange","Apple","Mango"]
console.log(fruits.length)//length of an array //4
/*
for(let i=0;i<=fruits.length-1;i++)
{
    console.log(fruits[i])
}
*/

//Accessing array elements with for/of loop
for(let ele of fruits)
{
    console.log(ele)
}

console.log(typeof(fruits))// object
console.log(Array.isArray(fruits))//true