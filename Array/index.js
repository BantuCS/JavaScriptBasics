//creating an array
let selectColors=['blue','red'];
//displaying an array object
console.log(selectColors);
//accessing array elements using index
console.log(selectColors[0]);
console.log(selectColors[1]);
//adding string data to an array dynamically
selectColors[2]='green';
console.log(selectColors);
//checking the type of array
console.log(typeof(selectColors));
//adding number data to an array
selectColors[3]=1500;
console.log(selectColors);
//creating an object called emp
let emp={

    name:'anil',
    age:30
}
//adding emp object to an array
selectColors[4]=emp;
console.log(selectColors);
//using implicit length from array object
console.log(selectColors.length);