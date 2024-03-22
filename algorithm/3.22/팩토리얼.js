function solution(n) {
    let factorial = 1;
    let i = 0; 
    do{
        i++;  
        factorial *= i; 
    } while(factorial <= n)
    return i-1;
}