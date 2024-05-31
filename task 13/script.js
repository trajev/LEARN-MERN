
function findMax( arr ){
    function compareNumbers(a, b) {
        return a - b;
    }
    
    arr.sort( compareNumbers )
    
    console.log("Maximum number: " + arr[arr.length-1] )
}


function findSum( arr ){
    let sum = 0;
    arr.forEach(element => {
        sum += element; 
    });
    console.log( "Sum: " + sum );
    
}

function findOddCount( arr ){
    let count = 0;
    arr.map( (e)=>{
        if( e%2!=0 ){
            count++;
        }
    } )
    console.log("Count of odd numbers: " + count );
}



let arrs = [ [4, 8, 2, 11, 6, 7, 10] , [1, 99, 2, 98, 3, 97], [0.4, 0.25, 2.6, 0.9923, 5.2]]

for(let arr of arrs ){

    console.log(  "Array :- [" + arr.join(", ")  + "]"  );
    
    
    findMax( arr );
    findSum( arr );
    findOddCount( arr );
    console.log("\n")

}