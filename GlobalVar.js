let globalVar = "i am global";
function showGlobal() {
    let name = "santhosh";
    console.log(globalVar);
    console.log("Hello " + name);
}
showGlobal();
console.log(globalVar);
try {
    console.log("Hello " + name);   
} catch (e) {
    console.log("Error:", e.message); 
}
{
    const inside = 42;
    console.log(inside);              
}
console.log(typeof inside);          

{
    var insidevar = 42;
}
console.log(typeof insidevar);        
