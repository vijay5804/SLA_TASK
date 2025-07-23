//you can't use break or return a array
//array.foreach(value,index){}

let fruits = ["apple", "jackfruit", "chikku"];
fruits.forEach(function(fruit, index) {
    console.log(index + ":" + fruit);
});

// forEach with arrow function
let numbers = [1, 2, 3];
numbers.forEach(num => {
    console.log(num * 2);
});

// map to double each number and return a new array
let n = [1, 2, 3];
let doubled = n.map(num => num * 2);
console.log(doubled);

//forEach
let n1 = [1, 2, 3];
let doubled1 = [];

n.forEach(num => {
  doubled.push(num * 2);
});

console.log("Original array:", n);
console.log("Doubled array:", doubled);

//object
//name,age,isstudent are key,ram,47,true are values
let person={
    name:"Ram",
    age:47,
    isStudent:true};
console.log(person.name);
person.city="New Work";
console.log(person.city);
delete person.isStudent;//deleted
console.log(person.isStudent);
//printing the obj
for(let key in person)
{
    console.log(key+":"+person[key]);
}
//obj using function
let user={
    name:"Alice",
    great:function()
    {
        console.log("Hai I'am Alice");
    }
};
user.great();





