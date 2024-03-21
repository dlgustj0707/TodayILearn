function solution(age) {
    let answer = '';
    const arr = ['a','b','c','d','e','f','g','h','i','j'];
    const age_arr = String(age).split("");
    age_arr.forEach(element => {
        answer += arr[element];
    });
    return answer;
}
//
function solution(age) {
    return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
