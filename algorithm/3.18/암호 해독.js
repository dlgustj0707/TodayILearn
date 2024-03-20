function solution(cipher, code) {
    var answer = cipher.split("").map((e, index) => {
        return (index+1) % code === 0 ? e : "";  
    });
    return answer.join("");
}
//
function solution(cipher, code) {
    var answer = "";
    for (let i = code - 1; i < cipher.length; i += code) {
        answer += cipher[i];
    }
    return answer;
}

//
function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}
//e1을 안쓸때 _로 표현한다.