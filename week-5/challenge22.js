/*

*
* *
* * *
* * * *
* * * * *

*/


function pattern(n){
    let diamond = '';

    for(let i = n - 1; i >= 1; i--){
        for(let j = 1; j <= n - i; j++){
            diamond += ' * ';
        }
        diamond += "\n";
    }

    return diamond;
}

console.log(pattern(5));