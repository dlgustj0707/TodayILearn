function solution(num_list, n) {
    var answer = [];
    let index = 0;
    while(index < num_list.length){
        let inner_arr = [];
        for (let j=0; j < n; j++){ //내부 배열에 몇개가 들어가는지
            inner_arr.push(num_list[index]);
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
        answer.push(num_list.splice(0,n));
    }

    return answer;
}