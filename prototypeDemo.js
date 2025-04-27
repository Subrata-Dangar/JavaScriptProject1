function student()
{
    this.name="John"
    this.gender="Male"
}

stu1=new student()
console.log(stu1.name)
console.log(stu1.gender)


stu1.age=35
console.log(stu1.name,stu1.gender,stu1.age)//John Male 35

stu2=new student()
console.log(stu2.name,stu2.gender,stu2.age)//John Male undefined

student.prototype.age=35
console.log(stu2.name,stu2.gender,stu2.age)//John Male 35