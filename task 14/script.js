
function divide( numerator , denominator ){

    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            if(  denominator==0 ){
                console.log()
                reject( "Dividing " + numerator + " by " + denominator + "... \nError: Division by zero is not allowed." )
            } else {
                console.log()
                resolve( "Dividing " + numerator + " by " + denominator + "... \nResult: " + numerator/denominator );
            }
        }, 1000 )
    } )

}


const p1 = divide( 10 , 2 );
p1.then( ( result )=>{
    console.log( result );
} ).catch( (err)=>{
    console.log( err );
} )

const p2 = divide( 0 , 0 );
p2.then( ( result )=>{
    console.log( result );
} ).catch( (err)=>{
    console.log( err );
} )


const p3 = divide( 7 , 3 );
p3.then( ( result )=>{
    console.log( result );
} ).catch( (err)=>{
    console.log( err );
} )


const p4 = divide( 0.36 , 2.5 );
p4.then( ( result )=>{
    console.log( result );
} ).catch( (err)=>{
    console.log( err );
} )


const p5 = divide( 999 , 333 );
p5.then( ( result )=>{
    console.log( result );
} ).catch( (err)=>{
    console.log( err );
} )