function solution(chicken) {
    let service = 0;
    while(chicken/10 >= 1){
        service += Math.floor(chicken/10);
        chicken = Math.floor(chicken/10) + chicken % 10;
    }
    return service ;
}