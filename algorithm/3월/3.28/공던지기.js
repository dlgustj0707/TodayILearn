function solution(numbers, k) {
    let index = 0;
    for (let i = 1; i < k; i++){ // i는 횟수
        // 길이가 홀수
        // ex) [1,2,3]이면 index가 0 2 1 0 2 1..
        if(numbers.length % 2 == 1){ 
            index+2 > numbers.length-1 ? index += 2-numbers.length : index += 2;
        }
        // 길이가 짝수 
        // ex) [1,2,3,4]이면 index가 0 2 0 2... 
        else {
            index === numbers.length-2 ? index = 0 : index +=2; 
        }
    }
    return numbers[index];
}
// 남의 풀이
function solution(numbers, k) {
    return numbers[((2 * (k -1))) % numbers.length];
}