function diamondRug(n){
    let diamond = '';

    for(let i = 1; i <= n; i++){
        for(let j = 1; j<=n-i; j++){
            diamond += ' ';
        }

        for(let k = 1; k<= (2 * i - 1); k++){
            diamond += '*';
        }
     diamond += "\n"   
    }

    //  fpr the lower part 

    for(let i = n- 1; i >= 1; i--){
        for(let j = 1; j <= n-i; j++){
            diamond += ' ';
        }

        for(let k = 1; k <= (2 * i - 1); k++){
            diamond += '*';
        }

        diamond += "\n";
    }

    return diamond;
}

console.log(diamondRug(3))