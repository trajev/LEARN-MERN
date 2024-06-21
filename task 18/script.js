/*

Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

Q5 -  State different use cases of map, filter and reduce functions.

Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

*/

//Question - 1 
// let arr = [1,2,3,4,5];
// let result = arr.map( val => val*val );
// console.log( result );




// Question - 2 
// let Func = score => {
//     return ( score>=90 ? 'A' : ( score>=80 ? 'B' : ( score>=70 ? 'C' : ( score>=60 ? 'D' : 'F' ) ) ) )
// }
// console.log( "Grade : " + Func( 89 ) );




// Question - 3
// let obj = {
//     companyName : "MG",
//     model : "HECTOR",
//     year: "2021"
// }

// let changeYear = newYear => {
//     obj.year = newYear;
// }

// changeYear( 2026 );

// let year = obj.year;
// let model = obj.model;
// console.log("Car year :" + year + " Car model : " + model )







// Question - 4
// isPrime = n => {
//     if( n<=1 ){
//         return false;
//     }
//     for(let i=2; i*i<=n; i++){
//         if( n%i==0 ){
//             return false;
//         }
//     }
//     return true;
// }

// let intArr = [1,2,3,4,5,6,7,8,9];
// let res = intArr.filter( (val)=>{
//     return isPrime(val);
// } )
// console.log( res );


// Question - 5
// console.log("use cases of map, reduce and filter: searching, filter array based on condition, perform mathematical operations using reduce, find max value and min value of items, sort items to ascending or descending order,");


// Question -6
// let getDetails = async () => {
//     await fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }

// let api = getDetails();
// console.log( api )

// Question - 7
let personDetails = {
    personNo: 1,
    properties : {
        name: "Kevin",
        address : "JamesBurg Street, California"
    }
}

console.log( "contact :" + personDetails?.properties?.contact   );