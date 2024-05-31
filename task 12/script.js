let numbers = [ 153 , 20, 277, 1000923, 15485863 ];

for( const number of numbers ){

    
    console.log("Number :- " + number );
    
    let n1 = number; //taking copy of number
    let sum = 0;
    while (n1>0) {
        sum += n1%10;
        n1 /= 10;
    }
    console.log("Sum of its digits: " + Math.floor(sum) );
    
    
    let count = number.toString().length;
    let armSum = 0;
    let n2 = number;
    while(n2>0){
        armSum += Math.pow( n2%10, count );
        n2 = Math.floor( n2 / 10 );
    }
    if( armSum === number ){
        console.log("Is it an Armstrong number? Yes");
    } else {
        console.log("Is it an Armstrong number? No");
    }
    
    let n3 = number;
    let flag = true;
    for(let i=2; i<=Math.sqrt(n3) ; i++){
        if( number%i==0 ){
            flag = false;
            break;
        }
    }
    
    console.log( "Is it a prime number? " + (flag ? "Yes" : "No") );
    
    let factors = [];
    for(let i=1; i<=number; i++){
        if( number%i==0 ){
            factors.push( i );
        }
    }
    
    console.log("Factors : " , factors.join(", ") );
    console.log("\n");
}