
//Arrow functions(=>--big arrow),
//1.Arrow function without parameter

const sla=() =>
{
    console.log("Welcome to SLA");
}
sla();

function sla1()//traditionalfunction
{
    console.log("welcome to SLA");
}
sla1();

//2.Arrow function with sigle parameter

const s=x=>x*x;
console.log(s(5));

//Arrow function with two parameter

const add=(a,b)=>
{
    let c=a=b;
    console.log(c);
}
let a=10;
let b=20;
add(a,b);
//3.Arrow function with multiple parameter

const s1=(x1,y1,z1)=>
{
    console.log(x1+y1+z1);
}
s1(10,20,30);

//Arrow function with multiple parameter

const checkEvenOdd = num => {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
};

checkEvenOdd(10); 
checkEvenOdd(7);   

//4.Arrow function with default parameter

const s4=(x4,y4,z4=30)=>
{
    console.log(x4+ " "+y4+" "+z4);
}
s4(10,20);