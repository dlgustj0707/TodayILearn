function solution(dots) {
    const dots_zero  = dots[0];
    let answer;
    for (let e of dots){
        if (dots_zero[0] !== e[0] && dots_zero[1] !== e[1]){
            answer = (e[0] - dots_zero[0]) * (e[1] - dots_zero[1])
            break;
        }
    }
    return Math.abs(answer);
}