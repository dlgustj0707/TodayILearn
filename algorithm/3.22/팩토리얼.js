function solution(n) { // n = 5 
    let factorial = 1;
    let i = 0; 
    do{
        i++;            // 1 2 3
        factorial *= i; // 1*2*3
    } while(factorial <= n)
    return i-1; // i!이 n 값 보다 작아야함
}