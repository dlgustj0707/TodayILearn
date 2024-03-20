function solution(numbers) {
    let answer = 0;
    numbers.sort((a, b) => a - b);

    numbers[0] * numbers[1] > numbers[numbers.length-1] * numbers[numbers.length-2] 
    ? answer = numbers[0] * numbers[1]: answer = numbers[numbers.length-1] * numbers[numbers.length-2];
    
    return answer;
}

//
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}