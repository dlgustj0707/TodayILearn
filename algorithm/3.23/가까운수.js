// function solution(array, n) {
//     // n과 arr 요소들의 값 차이를 넣을 배열
//     var gap_arr = array.map((e => {
//         return e-n;
//     }))
//     console.log(gap_arr);

//     let less_gap = gap_arr[0];
//     let i;
//     gap_arr.map((element,index) => {
//         // 차이가 가장 덜 나는 값을 찾기
//         if(Math.abs(less_gap) > Math.abs(element)){
//             less_gap = element; 
//             i = index;
//         }  
//         else if (Math.abs(less_gap) === Math.abs(element)){
//             (less_gap > element) ? i = index : ""; 
//         }
//     });
//     return array[i];
// }

function solution(array, n) {
    var answer = 0;
    const gap_arr = array.map((e) => {
        return n-e;
    })
    let less_gap = gap_arr[0];
    let index;
    for (let i=1; i < gap_arr.length;i++){
        if (Math.abs(less_gap) > Math.abs(gap_arr[i])){
            less_gap = gap_arr[i];
            index = i;
        } 
        else if (Math.abs(less_gap) === Math.abs(gap_arr[i])){
            if (less_gap > gap_arr[i]){
                less_gap = gap_arr[i];
                index = i;
            }
        }
    }

    return array[index];
}