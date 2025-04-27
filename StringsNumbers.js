//=======================String==========================
let s="Welcome"
//let s=new String()
//charAt()
console.log(s.charAt(4))

//concat()
console.log(s.concat(" to Javascript Programming"))
console.log(s.concat(" to Javascript").concat(" Programming"))

//replace()
s="Welcome to Javascript"
console.log(s.replace("Javascript","Java"))

//substring()
s="Welcome"
console.log(s.substring(0,4))//welc
console.log(s.substring(0,7))

//toLowerCase() toUpperCase()
s="WeLcOmE"
console.log(s.toLowerCase())
console.log(s.toUpperCase())

//split()
s="Welcome to Javascript"
let arr =s.split(" ")
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

//trim()
s="       Hello        "
console.log(s.trim())

//===========================Numbers======================
//let x=100
//let x=new Number(100)
let x=100//integer
let y=102.7//decimal
let z=10e2//exponencial value //10 to the power 2
console.log(x,y,z)


//isInteger()
x=10
y=1.8
z="x"
console.log(Number.isInteger(x))//true
console.log(Number.isInteger(y))//false
console.log(Number.isInteger(z))//false


//parseInt()  ---converts a string into Numbers
s="welcome"
console.log(Number.parseInt(s))//error since string contains charecters
s="12345"
console.log(typeof(s))//string
console.log(typeof(Number.parseInt(s)))//Number

//parseFloat()
s="123.567"
console.log(typeof(s))//string
console.log(typeof(Number.parseInt(s)))//Number

//toString() ---converts numbers into String
let n=1234.798798
console.log(typeof(n))//number
console.log(typeof(n.toString()))//String
