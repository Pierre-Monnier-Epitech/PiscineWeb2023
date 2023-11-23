export function fizzBuzz(num){ 
   
let ensemble = ''
for (let i = 1 ; i <= num ; i++){
    if (i%3 == 0 && i%5==0){
        ensemble += ('FizzBuzz')
    }
    else if( i %3== 0){
        ensemble += ('Fizz')
    }

    else if( i %5== 0){
        ensemble += ('Buzz')
    }

    else {
        ensemble += (i)
    }
    if (i !== num ) {
        ensemble += ', ';
      }
}
console.log(ensemble)
}


   
