function giftTofrnd(tg, frnd){
    let gg = 0; // giftgiven to the frnd 
    for(let i = 0; i < frnd; i++){
        if(tg > 0){
            gg++;
            tg--;
        }
    }
    return gg;
}

console.log(giftTofrnd(10, 5)); 