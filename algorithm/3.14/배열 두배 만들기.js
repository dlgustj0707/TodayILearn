function solution(numbers) {
    var answer = [];
    for (let i=0; i < numbers.length; i++){
        answer[i] = numbers[i] * 2;
    }
    return answer;
}

//reduce
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}
// numbers가 [1,2,3,4]이면

a=[]
b = 1 -> 2

//map
const solution = (numbers) => numbers.map((number) => number * 2)
