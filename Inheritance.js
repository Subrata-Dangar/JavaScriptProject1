class A
{
    a=100;
    display()
    {
        console.log(this.a)
    }
}

class B extends A 
{
    b=200;
    show()
    {
        console.log(this.b)
    }
}

let bobj=new B()
bobj.display()
bobj.show()

let aobj=new A()
aobj.display()
//aobj.show()//through  super class object we can not access sub class
