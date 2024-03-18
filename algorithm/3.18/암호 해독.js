function solution(cipher, code) {
    var answer = cipher.split("").map((e, index) => {
        return (index+1) % code === 0 ? e : "";  
    });
    return answer.join("");
}