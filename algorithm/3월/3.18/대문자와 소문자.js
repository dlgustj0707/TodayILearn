function solution(my_string) {
    const answer= [...my_string].map((e) => {
        if (e === e.toLowerCase()){
            return e.toUpperCase();
        }else if (e === e.toUpperCase()){
            return e.toLowerCase();
        }
    });
    return answer.join("");
}
//
function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase());
    return answer;
}