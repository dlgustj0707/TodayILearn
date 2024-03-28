// function solution(numbers, k) {
//     var answer = 0;
//     let j = 0;
//     for (let i=0; i < k; i++){ //i는 횟수  
//         if (j > numbers.length-1) {
//             j = j - numbers.length;
//         } else if (j+2)
//     }
//     answer = numbers[j];
//     return answer;
// }

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
        console.log(index);
    }
    return numbers[index];
}
solution([1, 2, 3], 5);