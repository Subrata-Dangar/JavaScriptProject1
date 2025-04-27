//break continue

for(let i=1;i<=10;i++)
{
    if(i==5)
        break;
    console.log(i);//1 2 3 4
}
console.log("======================");
for(let i=1;i<=10;i++)
{
    if(i==5)
        continue;
    console.log(i);//1 2 3 4 6 7 8 9 10
}
console.log("======================");
for(let i=1;i<=10;i++)
{
    if(i==2 || i==5 || i==8)
        continue;
    console.log(i);//1 3 4 6 7 9 10
}