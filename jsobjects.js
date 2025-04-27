// objects with properties 
let person=
{
    firstname:"John",
    lastname:"Smith",
    age:50,
    weght: 75.5
}
//Accessing object properties
console.log(person["firstname"])//john
console.log(person.firstname)//john //this is another way of accessing object properties

//Add new property to the object
person["height"]=5.5 //person.height=5.5 //this is another way
console.log(person.height)//5.5

//updating existing property of object
person["weght"]=72
console.log(person["weght"])

//remove the property of an object
delete person["age"]
console.log(person.age)//Undefined

console.log("==============================================")
// using for/in loop to read property
for (let x in person)
{
    //console.log(x)//this prints only the property names
    //console.log(person[x])//this prints only the property values
    console.log(x+" :"+person[x])
}
