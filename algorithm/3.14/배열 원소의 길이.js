function solution(strlist) {
    var answer = [];
    strlist.forEach(element => {
        answer.push(element.length);
    });
    return answer;
}
//map
function solution(strlist) {
    return strlist.map((el) => el.length)
}