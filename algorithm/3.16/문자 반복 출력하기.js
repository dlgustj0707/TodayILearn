function solution(my_string, n) {
    const answer = my_string.split("").map((e) => {
        return e.repeat(n); //
    });
    return answer.join("");
}

//
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}