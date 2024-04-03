function solution(num_list, n) {
    var answer = []; 
    let index = 0;
    while(index < num_list.length){
        let inner_arr = [];
        for (let j=0; j < n; j++){ //내부 배열에 몇개가 들어가는지
            inner_arr.push(num_list[index]); // 1, 2/ 3, 4/ 5, 6/
            index++;
        }
        answer.push(inner_arr);
    }
    return answer;
}

// 남의 풀이
function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        // 인덱스 0 부터 n개 삭제해서 배열에 담고 answer에 push
        // num_list가 [1,2,3,4,5,6] 일때 num.splice(0,2)는 [1,2]이고 
        // answer.push([1,2]) => [[1,2]]
        answer.push(num_list.splice(0,n)); 
    }

    return answer;
}