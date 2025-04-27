class Test
{
    static a=10; //static variable
    b=20;//Non-static variable
    static m1()
    {
        console.log("this is m1 static method...")
    }
    m2()
    {
        console.log("this is m2 non-static method...")
    }
}

//1) we can directly static variable and methods using class name
console.log(Test.a)
Test.a=1000
console.log(Test.a)
console.log(Test.b)//undefined //we can not access non-static variables without creating object

Test.m1()
//Test.m2()//error ////we can not access non-static methods without creating object


//1) we can access non-static variable and methods using class object
let t= new Test();
console.log(t.b)
t.m2()