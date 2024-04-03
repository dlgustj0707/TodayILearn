function solution(numbers) {
    var answer = 0;
    for (let i = 0; i<numbers.length; i++){
        answer += numbers[i];
    }
    answer /= numbers.length;
    return answer;
}

// reduce 사용
function solution(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
}

[1,2,3,4]