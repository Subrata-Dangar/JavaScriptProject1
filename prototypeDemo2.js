class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid
        this.ename=ename
    }
}

Employee.prototype.sal=50000

let e=new Employee(101,"David")
console.log(e.eid,e.ename,e.sal)

let e2=new Employee(102,"John")
console.log(e2.eid,e2.ename,e2.sal)

Employee.prototype.display= function()
        {
            console.log(this.eid,this.ename,this.sal)
        }

e.display();
e2.display();