function solution(bin1, bin2) {
    // parseInt(변수,_) => _진수를 십진수로 바꿔준다 (결과가 문자열)
    // toString(2) => 이진수로 바꿔준다 (결과가 문자열)
    const dec1 = Number(parseInt(bin1, 2));
    const dec2 = Number(parseInt(bin2, 2));
    let answer = dec1 + dec2;
    // console.log(answer);
    answer = answer.toString(2);
    // console.log(answer);
    return answer;
}