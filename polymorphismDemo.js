//Runtime polymorphism
class Animal
{
    speak()
    {
        console.log("Animals can make a Sound")
    }
}
class Dog extends Animal
{
    speak()
    {
        console.log("Dog Barks")
    }
}
class Cat extends Animal
{
    speak()
    {
        console.log("Cat Meaows")
    }
}

a=new Animal();
d=new Dog()
c=new Cat()


a.speak()
d.speak()
c.speak()
