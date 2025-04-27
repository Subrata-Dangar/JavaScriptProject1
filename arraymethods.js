let fruits = ["Banana","Orange","Apple","Mango"]
//toString() , join()
console.log(fruits.toString())//Banana,Orange,Apple,Mango
//console.log(fruits.join())//Banana,Orange,Apple,Mango
console.log(fruits.join("*"))//Banana*Orange*Apple*Mango

//pop() ---to remove last array elemnt
fruits = ["Banana","Orange","Apple","Mango"]
console.log(fruits.pop())//Mango --remove last array elemnt and print that element
console.log(fruits)

//push() ---to add element at the end of array
fruits = ["Banana","Orange","Apple","Mango"]
console.log(fruits.push("Kiwi"))// after adding the element at end it returns length
console.log(fruits)

//shift() --to remove the first array element and shift other elements to lower index
fruits = ["Banana","Orange","Apple","Mango"]
console.log(fruits.shift())//Banana --it returns the first element after remove
console.log(fruits)

//unshift() --to add element at first position and shift other elements to higher index
console.log(fruits.unshift("Lemon"))//it returns new length of the array after adding
console.log(fruits)

//deleting specific element
fruits = ["Banana","Orange","Apple","Mango"]
delete fruits[2]
console.log(fruits)//[ 'Banana', 'Orange', <1 empty item>, 'Mango' ]

//concat() ---marging od array
let arr1=[10,20]
let arr2=["A","B","C"]
console.log(arr1.concat(arr2))//[ 10, 20, 'A', 'B', 'C' ]
let arr3=["X","Y","Z"]
console.log(arr1.concat(arr2,arr3))//[10,  20,  'A', 'B','C', 'X', 'Y', 'Z']

//slice() --it slices a pice of an array
fruits = ["Banana","Orange","Apple","Mango"]
console.log(fruits.slice(1))//[ 'Orange', 'Apple', 'Mango' ]
console.log(fruits.slice(2))//[ 'Apple', 'Mango' ]

//sort() 
fruits = ["Banana","Orange","Apple","Mango"]
console.log(fruits.sort())//[ 'Apple', 'Banana', 'Mango', 'Orange' ]
let array1 =[100,800,300, 500,700,200,600]
console.log(array1.sort())//[100, 200, 300, 500, 600, 700, 800]
//reverse() 
fruits = ["Banana","Orange","Apple","Mango"]
console.log("Original array elements : "+fruits)
fruits.reverse();
console.log("Array after Reverse : "+fruits)//[ 'Mango', 'Apple', 'Orange', 'Banana' ]

