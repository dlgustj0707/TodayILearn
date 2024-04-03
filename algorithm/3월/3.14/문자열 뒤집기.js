function solution(my_string) {
    return my_string.split("").reverse().join("");
}

//스프레드 문법
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}