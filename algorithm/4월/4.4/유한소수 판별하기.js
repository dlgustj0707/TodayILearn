function solution(a, b) {
    for (let i=2; i <= a; i++) {
        if (a % i === 0 && b % i === 0 ){
            b = b / i;
            a = a / i;
            i = 1;
        }
    }
    while (b % 2 === 0 || b % 5 === 0) { // 2나 5로 나눠떨어진다면
        if (b % 2 === 0)
            b = b / 2;
        if (b % 5 === 0)
            b = b / 5;
    }
    return (b === 1) ? 1 : 2;
}

// 남의 코드
function solution(a, b) {
    let n = 1;
    for (let i = 1; i <= Math.min(a,b); i++) {
        if (a%i===0 && b%i===0) n = i; // 최대공약수를 구해줌
    }
    
    // 분모를 최대공약수로 나눠줌
    b/=n;
    while (b%2===0) b/=2;
    while (b%5===0) b/=5;

    return b === 1 ? 1 : 2;   
}

// 남의 풀이 => 이 풀이는 추천하지 않음
function solution(a,b) {
    // toFixed(10) => 소수점 10자리까지만 보여준다
    return Number((a/ b).toFixed(10)) == a / b ? 1 : 2;
}