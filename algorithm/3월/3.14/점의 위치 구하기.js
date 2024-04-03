function solution(dot) {
    var answer = 0;
    
    const x = dot[0];
    const y = dot[1];
    
    if (x * y > 0){
        if (x > 0)
            return 1;
        else 
            return 3;
    } else {
        if (x > 0)
            return 4;
        else 
            return 2;
    } 
}