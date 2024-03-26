function solution(n) {
    let arr = [];
    let i = 2;
    while (i <= n){
        if (n % i === 0) {
            arr.push(i);
            n /= i;
            i=2;
        } else {
            i++
        }
    }
    const answer = [...new Set(arr)];
    return answer;
}

// 수정
function solution(n) {
    let arr = [];
    let i = 2;
    while (i <= n){
        n % i === 0 ? (arr.push(i), n /= i, i = 2) : i++;
    }
    const answer = [...new Set(arr)];
    return answer;
}