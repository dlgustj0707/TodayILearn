function solution(n, t) {
    const answer = n * (2 ** t); 
    return answer;
}

// 비트연산
function solution(n, t) {
    return n << t;
}
2: 0010  << 0100 :4
왼쪽 시프트: X 2

오른쪽 시프트: X 1/2