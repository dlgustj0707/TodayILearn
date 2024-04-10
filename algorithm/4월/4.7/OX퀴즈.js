function solution(quiz) {
    const answer = []
    quiz.map((e) => {
 
        let arr = e.split(" ");
        
        if (arr[1] === "+"){
            if (Number(arr[0])+Number(arr[2]) === Number(arr[4])){
                answer.push("O");
            } else {
                answer.push("X");
            }
        } else {
            if (Number(arr[0])-Number(arr[2]) === Number(arr[4])){
                answer.push("O");
            } else {
                answer.push("X");
            }
        }
    })
    return answer;
}

// 남의 풀이
function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');
        return +a + (+b * sign) === +result ? 'O' : 'X' // +a는 a를 숫자로 만들어줌
    });
}