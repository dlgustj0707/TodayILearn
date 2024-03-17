function solution(array, height) {
    var answer = 0;
    array.forEach(element => {
        if(element > height){
            answer++;
        } 
    });
    return answer;
}

//filter 사용
function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}