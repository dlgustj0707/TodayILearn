function solution(n) {
    var answer = 0;
    const arr = n.toString().split("");
    const newArr = arr.map(Number);
    newArr.forEach((e) =>
        {answer += e });
    return answer;
}

//
function solution(n) {
    return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}