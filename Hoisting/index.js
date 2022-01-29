//variable hoisting
console.log(a);
var a=10;

//function hoisting
console.log(abc);
console.log(abc());
function abc()
{
    console.log("hello anil");
}