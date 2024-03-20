function solution(rsp) {
    const answer = [...rsp].map((e) => {
        if (e === "2")
            return "0";
        else if (e === "0")
            return "5";
        else if (e === "5")
            return "2";
    })
    return answer.join("");
}
//
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}