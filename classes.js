class Student
{
    // setDetails(sid,sname,grade)
    // {
    //     this.sid=sid
    //     this.sname=sname
    //     this.grade=grade
    // }
    constructor(sid,sname,grade)
    {
        this.sid=sid
        this.sname=sname
        this.grade=grade
    }
    display()
    {
        console.log(this.sid, this.sname, this.grade);
    }
}

let stu= new Student(101,"John","A");
//stu.setDetails(101,"John","A");
stu.display();
let stu1= new Student(101,"David","A");
let stu2= new Student(101,"Smith","B");
let stu3= new Student(101,"Miller","C");

stu1.display();
stu2.display();
stu3.display();