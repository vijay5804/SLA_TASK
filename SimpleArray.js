const colors=["red","green","blue","yellow"];
const numbers=[10,20,30];
numbers.push(40);
console.log(numbers[1]);//print the array
//print the array using loop
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}
//print in a single line of text use join()
console.log(colors.join(","));