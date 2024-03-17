function solution(array, n) {
    var answer = 0;
    array.forEach(element => {
        if (element === n){
            answer += 1;
        }
    });
    return answer;
}

//indexOf를 사용
function solution(array, n) {
    var answer = 0;
    let pos = 0;

    while(array.indexOf(n, pos) != -1) { // n이 pos번째부터 검색했을때 있으면  
        answer++;
        console.log(pos);
        pos = array.indexOf(n, pos) + 1; // pos = n 위치 + 1
        console.log(pos);
    }

    return answer;
}

solution([1,2,3,1], 1);