/*

*
* *
* * *
* * * * 
* * * *
* * *
* *
*

*/


function starPattern(n){
    let diamond = '';

    for(let i = n - 1; i >= 1; i--){
        for(let j = 1; j <= n - i; j++){
            diamond += ' * '
        }
        diamond += "\n";
    }

    // for the lower part of the pattern 

    for(let i = 1; i <= n - 1; i++){
        for(let j = 1; j <= n - i; j++){
            diamond += ' * ';
        }
        diamond += "\n";
    }

    return diamond;
}

let n = 5;

console.log(starPattern(n));