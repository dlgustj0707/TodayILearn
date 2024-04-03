function solution(n) {
    let i = 1;
    let pizza = 7;
    while(pizza * i / n < 1){
        i += 1;
    }
    return i;
}