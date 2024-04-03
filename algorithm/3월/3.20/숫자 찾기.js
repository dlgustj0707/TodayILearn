function solution(num, k) {
    var answer = 0;
    const arr = String(num).split("").map(Number);
    for (let i=0; i < arr.length; i++){
        if (arr[i] === k){
            answer = i + 1;
            break;
        }
    }
    if (answer === 0){
        answer = -1;
    }
    return answer;
}

//
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}
