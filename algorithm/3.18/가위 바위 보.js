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