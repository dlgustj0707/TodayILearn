function solution(my_string) {
    const arr = [...my_string].filter((e) => {
        return !isNaN(Number(e)); // 숫자인 문자면 true
    }).sort();
    
    const answer = arr.map(Number);
    return answer;
}