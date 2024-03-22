function solution(my_string) {
    const answer = [...my_string].map((e) => {
        //대문자이면 소문자로 소문자이면 그대로
        return e === e.toUpperCase() ? e = e.toLowerCase() : e;
    })
    answer.sort();
    return answer.join("");
}
