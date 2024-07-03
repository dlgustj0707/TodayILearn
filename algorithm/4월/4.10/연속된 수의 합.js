// function solution(num, total) {
//     const arr = new Array(num).fill().map((v,i) => i+1);
//     let sum = 0;
//     // arr의 합을 구한다.
//     arr.map((e) => {
//         sum += e;
//     })

//     while (sum !== total){
//         if (sum > total){
//             arr.pop();
//             arr.unshift(arr[0] - 1);
//         } else if (sum < total) {
//             arr.push(arr[num-1] + 1);
//             arr.shift()
//         }
//         sum = 0;
//         arr.map((e) => {
//             sum += e;
//         })
//     }

//     return arr;
// }

function solution(num, total) {
    var answer = [];
    
    let first_value = Math.floor(total/num) - Math.floor((num-1)/2);
    for (let i = 0; i < num; i++){
        answer.push(first_value);
        first_value++;
    }
    return answer;
}